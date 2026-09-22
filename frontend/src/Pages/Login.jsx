import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Input from "../Components/Input";

function Login() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <main className="flex justify-center px-6 py-16">

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">

          <h1 className="text-3xl font-bold text-center text-gray-900">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Login to continue your career journey
          </p>

          <form>

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <Button type="submit">
              Login
            </Button>

          </form>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}

            <a
              href="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </a>

          </p>

        </div>

      </main>

    </div>
  );
}

export default Login;