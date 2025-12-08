// src/pages/login.jsx
import illustration from "../assets/signup-illustration.png";
import { Link } from "react-router-dom";

const fieldClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm " +
  "shadow-[0_4px_10px_rgba(15,23,42,0.08)] outline-none " +
  "focus:ring-2 focus:ring-sky-400 focus:border-sky-400 placeholder:text-slate-400";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E6F3FF]">
      {/* Outer frame: 1440 x 1024 */}
      <div className="relative w-full max-w-[1440px] h-[1024px] bg-[#E6F3FF] overflow-hidden">
        {/* Login card – 680 x 650 at (86, 188) */}
        <div
          className="absolute bg-white rounded-3xl shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-slate-200 px-10 py-8 flex flex-col justify-between"
          style={{
            top: "188px",
            left: "86px",
            width: "680px",
            height: "650px",
          }}
        >
          {/* Card header */}
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Login to Your Account
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Access SkillBridge to manage NGO projects and volunteers.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6">
            {/* Email */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={fieldClasses}
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className={fieldClasses}
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs font-medium text-sky-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#FF7A1A] py-3 text-sm font-semibold text-white 
                         shadow-[0_6px_12px_rgba(249,115,22,0.45)] hover:bg-[#FF6A00] transition-colors"
            >
              Login
            </button>
          </form>

          {/* Bottom text */}
          <p className="mt-6 text-center text-xs text-slate-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-sky-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Illustration – 702 x 835 at (738, 144) */}
        <div
          className="absolute"
          style={{
            top: "144px",
            left: "738px",
            width: "702px",
            height: "835px",
          }}
        >
          <img
            src={illustration}
            alt="Volunteer at computer"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
