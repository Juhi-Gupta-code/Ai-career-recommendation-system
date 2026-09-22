import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Input from "../Components/Input";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />

      <main className="flex justify-center px-6 py-12">
        <div className="w-full max-w-lg">

          {/* Register Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">

            {/* Heading */}
            <div className="text-center mb-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white text-2xl font-bold shadow-lg">
                AI 
              </div>

              <h1 className="text-3xl font-bold text-gray-900">
                Create Your Account
              </h1>

              <p className="mt-2 text-gray-500">
                Start your personalized career journey
              </p>
            </div>

            <form className="space-y-1">

              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />

              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
              />

              {/* Terms */}
              <div className="flex items-start gap-3 py-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-blue-600"
                />

                <p className="text-sm text-gray-500">
                  I agree to the{" "}
                  <span className="text-blue-600 font-medium cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 font-medium cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>

              <Button type="submit">
                Create Account
              </Button>

            </form>

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-7">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
              >
                Login
              </a>
            </p>

          </div>

        </div>
      </main>
    </div>
  );
}

export default Register;