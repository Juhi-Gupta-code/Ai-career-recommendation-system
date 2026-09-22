import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          AI Career
        </Link>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="text-gray-700 hover:text-blue-600"
          >
            Register
          </Link>

          <Link
            to="/profile"
            className="text-gray-700 hover:text-blue-600"
          >
            Profile
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;