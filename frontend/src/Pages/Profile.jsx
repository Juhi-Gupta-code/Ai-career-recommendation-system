import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* Avatar */}
            <div className="h-24 w-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-3xl font-bold shadow-lg">
              AS
            </div>

            {/* User Info */}
            <div className="text-center md:text-left flex-1">

              <h1 className="text-3xl font-bold">
                Aishwarya
              </h1>

              <p className="mt-1 text-blue-100">
                Computer Science & Engineering Student
              </p>

              <p className="mt-2 text-sm text-blue-100">
                aishwarya@example.com
              </p>

            </div>

            {/* Edit Button */}
            <button
              onClick={() => navigate("/edit-profile")}
              className="px-5 py-2.5 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Edit Profile
            </button>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Personal Information */}
          <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Personal Information
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-gray-400">Full Name</p>
                <p className="font-medium text-gray-800 mt-1">
                  Aishwarya
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-gray-800 mt-1 break-words">
                  aishwarya@example.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Education</p>
                <p className="font-medium text-gray-800 mt-1">
                  B.Tech CSE
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Experience</p>
                <p className="font-medium text-gray-800 mt-1">
                  Student / Fresher
                </p>
              </div>

            </div>

          </div>

          {/* Skills & Interests */}
          <div className="lg:col-span-2 space-y-6">

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

              <div className="flex justify-between items-center mb-5">

                <h2 className="text-xl font-bold text-gray-900">
                  Skills
                </h2>

                <button className="text-blue-600 font-medium hover:underline">
                  + Add Skill
                </button>

              </div>

              <div className="flex flex-wrap gap-3">

                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium">
                  Python
                </span>

                <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-medium">
                  Machine Learning
                </span>

                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full font-medium">
                  React.js
                </span>

                <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full font-medium">
                  SQL
                </span>

                <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full font-medium">
                  JavaScript
                </span>

              </div>

            </div>

            {/* Career Interests */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Career Interests
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <h3 className="font-semibold text-blue-900">
                    Artificial Intelligence
                  </h3>
                  <p className="text-sm text-blue-600 mt-1">
                    High Interest
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <h3 className="font-semibold text-purple-900">
                    Machine Learning
                  </h3>
                  <p className="text-sm text-purple-600 mt-1">
                    High Interest
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                  <h3 className="font-semibold text-green-900">
                    Web Development
                  </h3>
                  <p className="text-sm text-green-600 mt-1">
                    Medium Interest
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                  <h3 className="font-semibold text-orange-900">
                    Data Science
                  </h3>
                  <p className="text-sm text-orange-600 mt-1">
                    High Interest
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Profile;