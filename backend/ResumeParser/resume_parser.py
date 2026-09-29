import os
import re
import json
import argparse
import fitz
import spacy

nlp = spacy.load("en_core_web_sm")

skill_keywords = [
    "python", "java", "c++", "javascript", "typescript", "html", "css",
    "sql", "mysql", "mongodb", "oracle", "excel", "ms office",
    "machine learning", "deep learning", "data analysis", "data science",
    "artificial intelligence", "nlp", "natural language processing",
    "pandas", "numpy", "tensorflow", "pytorch", "scikit-learn",
    "react", "node.js", "node", "express", "flask", "django",
    "git", "github", "aws", "azure", "docker",
    "accounting", "auditing", "banking", "finance", "financial analysis",
    "payroll", "budget preparation", "cost analysis", "inventory management",
    "communication", "leadership", "teamwork", "management",
    "marketing", "sales", "project management",
    "photoshop", "illustrator", "video editing", "audio editing",
    "tally", "pagemaker", "mis", "financial management"
]

education_headings = [
    "Education", "Education and Training", "Educational Background",
    "Educational Qualifications", "Academic Background", "Academic Qualifications"
]

experience_headings = [
    "Experience", "Work Experience", "Work History", "Professional Experience",
    "Employment History", "Career History"
]

next_section_headings = [
    "Education", "Education and Training", "Educational Background",
    "Educational Qualifications", "Academic Background", "Academic Qualifications",
    "Experience", "Work Experience", "Work History", "Professional Experience",
    "Employment History", "Career History", "Skills", "Skill Highlights",
    "Technical Skills", "Professional Skills", "Affiliations", "Certifications",
    "Certification", "Certificates", "Professional Certifications",
    "Certifications and Training", "Certifications and Awards", "Certification and Awards",
    "Training", "Additional Information", "Interests", "Languages",
    "Language and Writing Skills", "Personal Information", "Personal Profile",
    "Highlights", "Summary", "Objective", "References"
]

certification_headings = [
    "Certifications", "Certification", "Certificates", "Professional Certifications",
    "Certifications and Training", "Certifications and Awards", "Certification and Awards"
]

certification_keywords = [
    "CPA", "CFA", "CFE", "PMP", "CMA", "ACCA", "CIA", "CISA", "CFP", "CDFM",
    "Certified Public Accountant", "Certified Fraud Examiner",
    "Certified Management Accountant", "Certified Internal Auditor",
    "Certified Financial Planner", "Project Management Professional",
    "Chartered Accountant", "Chartered Financial Analyst", "Microsoft Certified",
    "AWS Certified", "Google Certified", "Cisco Certified", "Oracle Certified",
    "CompTIA", "First Aid", "CPR"
]

def extract_text_from_pdf(pdf_path):
    pdf = fitz.open(pdf_path)
    raw_text = ""
    try:
        for page in pdf:
            raw_text += page.get_text()
    finally:
        pdf.close()
    return raw_text

def clean_resume_text(text):
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_skills(text):
    text_lower = text.lower()
    found_skills = []
    for skill in skill_keywords:
        pattern = r'(?<!\w)' + re.escape(skill.lower()) + r'(?!\w)'
        if re.search(pattern, text_lower):
            found_skills.append(skill)
    return found_skills

def extract_section_from_raw_text(text, section_names, next_sections):
    text_clean = re.sub(r'\s+', ' ', text).strip()
    section_pattern = '|'.join(re.escape(section) for section in section_names)
    start_match = re.search(
        r'(?<!\w)(?:' + section_pattern + r')(?!\w)',
        text_clean,
        re.IGNORECASE
    )
    if not start_match:
        return ""
    remaining_text = text_clean[start_match.end():]
    next_pattern = '|'.join(re.escape(section) for section in next_sections)
    end_match = re.search(
        r'(?<!\w)(?:' + next_pattern + r')(?!\w)',
        remaining_text,
        re.IGNORECASE
    )
    if end_match:
        remaining_text = remaining_text[:end_match.start()]
    return remaining_text.strip()

def extract_education(text):
    # Find EDUCATION as an actual section heading
    start_match = re.search(
        r'(?im)^\s*education\s*$',
        text
    )

    if not start_match:
        return ""

    remaining_text = text[start_match.end():]

    # Find the next major section heading
    next_section_pattern = (
        r'(?im)^\s*(?:'
        r'experience|work experience|work history|professional experience|'
        r'employment history|career history|'
        r'skills|skill highlights|technical skills|professional skills|'
        r'certifications|certification|certificates|'
        r'projects|achievements|leadership|'
        r'interests|languages|references'
        r')\s*$'
    )

    end_match = re.search(next_section_pattern, remaining_text)

    if end_match:
        remaining_text = remaining_text[:end_match.start()]

    return remaining_text.strip()
def extract_experience(text):
    return extract_section_from_raw_text(text, experience_headings, next_section_headings)

def extract_certifications(text):
    text_clean = re.sub(r'\s+', ' ', text).strip()
    heading_pattern = '|'.join(re.escape(x) for x in certification_headings)
    match = re.search(
        r'(?<!\w)(?:' + heading_pattern + r')(?!\w)',
        text_clean,
        re.IGNORECASE
    )
    if not match:
        return ""
    content = text_clean[match.end():].strip()
    next_pattern = '|'.join(re.escape(x) for x in next_section_headings)
    end_match = re.search(
        r'(?<!\w)(?:' + next_pattern + r')(?!\w)',
        content,
        re.IGNORECASE
    )
    if end_match:
        content = content[:end_match.start()].strip()
    content = re.sub(r'\s+', ' ', content).strip()
    if not content:
        return ""
    found = []
    for keyword in certification_keywords:
        pattern = r'(?<!\w)' + re.escape(keyword) + r'(?!\w)'
        keyword_match = re.search(pattern, content, re.IGNORECASE)
        if keyword_match:
            start = max(0, keyword_match.start() - 80)
            end = min(len(content), keyword_match.end() + 120)
            snippet = re.sub(r'\s+', ' ', content[start:end]).strip()
            if snippet not in found:
                found.append(snippet)
    if found:
        return " | ".join(found)
    if len(content) <= 250:
        return content
    return ""

def tokenize_text(text):
    return [token.text for token in nlp(text)]

def lemmatize_text(text):
    return [token.lemma_ for token in nlp(text)]

def extract_named_entities(text):
    return [{"text": entity.text, "label": entity.label_} for entity in nlp(text).ents]

def parse_resume(pdf_path, category=""):
    raw_text = extract_text_from_pdf(pdf_path)
    clean_text = clean_resume_text(raw_text)

    return {
        "Filename": os.path.basename(pdf_path),
        "Category": category,

        "Skills": ", ".join(extract_skills(clean_text)),

        "Education": extract_education(raw_text),

        "Experience": extract_experience(raw_text),

        "Certifications": extract_certifications(raw_text),

        "Tokens": tokenize_text(clean_text),

        "Lemmas": lemmatize_text(clean_text),

        "Named_Entities": extract_named_entities(clean_text),

        "Resume_Text": clean_text
    }
def process_resume_folder(root_folder):
    all_resumes = []
    errors = []
    categories = [
        folder for folder in os.listdir(root_folder)
        if os.path.isdir(os.path.join(root_folder, folder))
    ]
    print("Number of categories:", len(categories))
    print("Categories:", categories)
    for category in categories:
        category_path = os.path.join(root_folder, category)
        for filename in os.listdir(category_path):
            if not filename.lower().endswith(".pdf"):
                continue
            pdf_path = os.path.join(category_path, filename)
            try:
                all_resumes.append(parse_resume(pdf_path, category))
            except Exception as e:
                errors.append({"Filename": filename, "Category": category, "Error": str(e)})
                print("Error processing:", pdf_path)
                print("Error:", e)
    return all_resumes, errors

def save_results(all_resumes, errors, output_folder):
    os.makedirs(output_folder, exist_ok=True)
    json_path = os.path.join(output_folder, "parsed_resumes.json")
    error_path = os.path.join(output_folder, "parser_errors.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(all_resumes, f, ensure_ascii=False, indent=2)
    with open(error_path, "w", encoding="utf-8") as f:
        json.dump(errors, f, ensure_ascii=False, indent=2)
    csv_path = ""
    try:
        import pandas as pd
        csv_path = os.path.join(output_folder, "parsed_resumes.csv")
        pd.DataFrame(all_resumes).to_csv(csv_path, index=False, encoding="utf-8-sig")
    except Exception:
        pass
    return json_path, error_path, csv_path

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", type=str, default="")
    parser.add_argument("--folder", type=str, default="")
    parser.add_argument("--category", type=str, default="")
    parser.add_argument("--output", type=str, default="parser_output")
    args = parser.parse_args()
    if args.pdf:
        print(json.dumps(parse_resume(args.pdf, args.category), ensure_ascii=False, indent=2))
    elif args.folder:
        all_resumes, errors = process_resume_folder(args.folder)
        json_path, error_path, csv_path = save_results(all_resumes, errors, args.output)
        print("Total resumes processed:", len(all_resumes))
        print("Total errors:", len(errors))
        print("Parsed JSON:", json_path)
        print("Errors JSON:", error_path)
        if csv_path:
            print("Parsed CSV:", csv_path)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
