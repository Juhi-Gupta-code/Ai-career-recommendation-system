import { Link } from "react-router-dom";

function CareerCard({
  title,
  match,
  description,
  skills,
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 px-3 py-2 text-center">
          <p className="text-xs font-medium text-blue-500">
            Match
          </p>

          <p className="text-xl font-bold text-blue-700">
            {match}%
          </p>
        </div>

      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        to={`/career/${encodeURIComponent(title)}`}
        className="mt-6 block rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
      >
        View Career
      </Link>

    </div>
  );
}

export default CareerCard;