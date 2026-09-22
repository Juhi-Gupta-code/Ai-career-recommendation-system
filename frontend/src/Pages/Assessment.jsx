import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Assessment() {
  const navigate = useNavigate();

  const [skills, setSkills] = useState([]);
  const [interest, setInterest] = useState("");
  const [education, setEducation] = useState("");

  const skillOptions = [
    "Programming",
    "Python",
    "Java",
    "JavaScript",
    "Data Analysis",
    "Machine Learning",
    "Communication",
    "Problem Solving",
  ];

  const toggleSkill = (skill) => {
    setSkills((previous) =>
      previous.includes(skill)
        ? previous.filter((item) => item !== skill)
        : [...previous, skill]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (skills.length === 0 || !interest || !education) {
      alert("Please complete all required fields.");
      return;
    }

    // Temporary frontend data
    localStorage.setItem(
      "assessmentData",
      JSON.stringify({
        skills,
        interest,
        education,
      })
    );

    navigate("/recommendations");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-12">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Career Assessment
          </h1>

          <p className="mt-3 text-gray-500">
            Tell us about your skills and interests to discover suitable career paths.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
        >

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              What are your skills?
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Select all the skills you currently have.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {skillOptions.map((skill) => (
                <button
                  type="button"
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`rounded-xl border px-4 py-3 text-left font-medium transition ${
                    skills.includes(skill)
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-300"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </section>

          {/* Interest */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              What is your main career interest?
            </h2>

            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select an interest</option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Machine Learning">
                Machine Learning
              </option>
              <option value="Web Development">
                Web Development
              </option>
              <option value="Data Science">
                Data Science
              </option>
              <option value="Cyber Security">
                Cyber Security
              </option>
            </select>
          </section>

          {/* Education */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              What is your education level?
            </h2>

            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">Select education</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MCA">MCA</option>
              <option value="Other">Other</option>
            </select>
          </section>

          <button
            type="submit"
            className="mt-10 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Get Career Recommendations
          </button>

        </form>
      </main>
    </div>
  );
}

export default Assessment;