import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const [name, setName] = useState("Aishwarya");
  const [email, setEmail] = useState("aishwarya@example.com");
  const [education, setEducation] = useState("B.Tech CSE");
  const [experience, setExperience] = useState("Student / Fresher");
  const [careerGoal, setCareerGoal] = useState("AI / ML Engineer");

  const [skills, setSkills] = useState([
    "Python",
    "Machine Learning",
    "React.js",
    "SQL",
    "JavaScript",
  ]);

  const [interests, setInterests] = useState([
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Web Development",
  ]);

  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    const skill = newSkill.trim();

    if (skill !== "" && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(
      skills.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleInterestChange = (interest) => {
    if (interests.includes(interest)) {
      setInterests(
        interests.filter((item) => item !== interest)
      );
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    alert("Profile updated successfully!");

    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-10 text-white">

            <h1 className="text-3xl font-bold">
              Edit Profile
            </h1>

            <p className="text-blue-100 mt-2">
              Update your personal, academic and career information.
            </p>

          </div>


          <form
            onSubmit={handleSave}
            className="p-8"
          >

            <div className="mb-10">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>


                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>


                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Education
                  </label>

                  <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>


                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Experience
                  </label>

                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

            </div>


            <div className="mb-10">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3 mb-5">

                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full"
                  >

                    <span>
                      {skill}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-blue-500 hover:text-red-500 font-bold"
                    >
                      ×
                    </button>

                  </div>
                ))}

              </div>


              <div className="flex flex-col sm:flex-row gap-3">

                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                  placeholder="Enter a new skill"
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Add Skill
                </button>

              </div>

            </div>


            <div className="mb-10">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Career Interests
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Data Science",
                  "Web Development",
                  "Cybersecurity",
                  "Cloud Computing",
                ].map((interest) => (

                  <label
                    key={interest}
                    className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition ${
                      interests.includes(interest)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >

                    <input
                      type="checkbox"
                      checked={interests.includes(interest)}
                      onChange={() =>
                        handleInterestChange(interest)
                      }
                      className="w-5 h-5"
                    />

                    <span className="text-gray-700 font-medium">
                      {interest}
                    </span>

                  </label>

                ))}

              </div>

            </div>


            <div className="mb-10">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Career Goal
              </h2>

              <select
                value={careerGoal}
                onChange={(e) => setCareerGoal(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option>AI / ML Engineer</option>
                <option>Data Scientist</option>
                <option>Software Developer</option>
                <option>Data Analyst</option>
                <option>Web Developer</option>
                <option>Cybersecurity Analyst</option>
                <option>Cloud Engineer</option>

              </select>

            </div>


            <div className="flex flex-col sm:flex-row justify-end gap-4 border-t pt-6">

  <button
    type="button"
    onClick={() => navigate("/resume-upload")}
    className="px-7 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition"
  >
    Upload Resume
  </button>

  <button
    type="button"
    onClick={() => navigate("/profile")}
    className="px-7 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition"
  >
    Cancel
  </button>

  <button
    type="submit"
    className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
  >
    Save Changes
  </button>

</div>
          </form>

        </div>

      </div>

    </div>
  );
}

export default EditProfile;