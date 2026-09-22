import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

function CareerDetails() {
  const { careerName } = useParams();

  const career = decodeURIComponent(careerName);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-12">

        <Link
          to="/recommendations"
          className="font-medium text-blue-600 hover:underline"
        >
          ← Back to Recommendations
        </Link>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-lg">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="font-semibold text-blue-600">
                Career Path
              </p>

              <h1 className="mt-2 text-4xl font-bold text-gray-900">
                {career}
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                Explore the skills, learning paths and opportunities
                associated with this career.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 px-8 py-5 text-center">
              <p className="text-sm text-blue-600">
                Your Match
              </p>

              <p className="text-4xl font-bold text-blue-700">
                92%
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              About this Career
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              This career involves applying technical knowledge,
              analytical thinking and problem-solving skills to
              develop solutions for real-world problems.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Required Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Python",
                "SQL",
                "Machine Learning",
                "Statistics",
                "Data Visualization",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Recommended Learning Path
            </h2>

            <div className="mt-5 space-y-4">

              <div className="rounded-xl bg-gray-50 p-4">
                <span className="font-bold text-blue-600">01</span>
                <span className="ml-4 font-medium">
                  Learn Python Programming
                </span>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <span className="font-bold text-blue-600">02</span>
                <span className="ml-4 font-medium">
                  Learn SQL and Database Management
                </span>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <span className="font-bold text-blue-600">03</span>
                <span className="ml-4 font-medium">
                  Learn Machine Learning
                </span>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <span className="font-bold text-blue-600">04</span>
                <span className="ml-4 font-medium">
                  Build Real-world Projects
                </span>
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}

export default CareerDetails;