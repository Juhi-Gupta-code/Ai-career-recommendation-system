import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Find Your Perfect
          <span className="text-blue-600"> Career Path</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
          Discover career opportunities based on your skills,
          interests, personality and goals.
        </p>

        <div className="mt-8">
          <Link
            to="/register"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              Resume Upload
            </h3>

            <p className="text-gray-600 mt-3">
              Upload your resume and provide your career information.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              AI Analysis
            </h3>

            <p className="text-gray-600 mt-3">
              AI analyzes your skills, interests and personality.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-xl font-semibold">
              Career Recommendation
            </h3>

            <p className="text-gray-600 mt-3">
              Get career recommendations based on your profile.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;