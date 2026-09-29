from fastapi import FastAPI, UploadFile, File
import tempfile
import os

from resume_parser import parse_resume

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Resume Parser API is running"}


@app.post("/parse-resume")
async def parse_resume_api(resume: UploadFile = File(...)):

    if not resume.filename.lower().endswith(".pdf"):
        return {"message": "Please upload a PDF resume"}

    temp_path = None

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp_file:
            temp_file.write(await resume.read())
            temp_path = temp_file.name

        parsed_data = parse_resume(temp_path)

        return parsed_data

    finally:
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)