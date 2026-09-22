import Navbar from "../Components/Navbar";
import CareerCard from "../Components/CareerCard";

function Recommendations() {

  const careers = [
    {
      title: "Data Scientist",
      match: 92,
      description:
        "Analyze data and build machine learning models to solve real-world problems.",
      skills: ["Python", "SQL", "Machine Learning"],
    },
    {
      title: "Machine Learning Engineer",
      match: 88,
      description:
        "Design, train and deploy machine learning models for intelligent applications.",
      skills: ["Python", "ML", "TensorFlow"],
    },
    {
      title: "Data Analyst",
      match: 84,
      description:
        "Transform data into useful insights that help organizations make decisions.",
      skills: ["SQL", "Excel", "Data Visualization"],
    },
    {
      title: "Frontend Developer",
      match: 79,
      description:
        "Build interactive and responsive web applications using modern technologies.",
      skills: ["React", "JavaScript", "CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">

        <div className="mb-10">
          <p className="font-semibold text-blue-600">
            AI Career Recommendation
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Recommended Careers
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            Based on your skills, interests and educational background,
            these career paths may be suitable for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {careers.map((career) => (
            <CareerCard
              key={career.title}
              title={career.title}
              match={career.match}
              description={career.description}
              skills={career.skills}
            />
          ))}
        </div>

      </main>
    </div>
  );
}

export default Recommendations;