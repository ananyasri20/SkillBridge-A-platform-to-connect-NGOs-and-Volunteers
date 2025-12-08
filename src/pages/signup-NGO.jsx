// src/pages/signup-ngo.jsx
import illustration from "../assets/signup-illustration.png";
import { Link } from "react-router-dom";

const fieldClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm " +
  "shadow-[0_4px_10px_rgba(15,23,42,0.08)] outline-none " +
  "focus:ring-2 focus:ring-sky-400 focus:border-sky-400 placeholder:text-slate-400";

function SignupNGO() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E6F3FF]">
      {/* Outer frame: 1440 x 1024 */}
      <div className="relative w-full max-w-[1440px] h-[1024px] bg-[#E6F3FF] px-10 py-8">
        {/* LEFT: NGO signup form area */}
        <div className="w-[597px] h-[933px] flex flex-col">
          <div className="max-w-[560px]">
            <p className="text-xs font-medium text-slate-500 mb-2">
              Sign Up (NGO)
            </p>

            <h1 className="text-3xl font-semibold text-slate-900">
              Create an Account
            </h1>
            <p className="text-sm text-slate-600 mt-1 mb-6">
              Join SkillBridge to connect with NGOs and volunteering opportunities.
            </p>
          </div>

          <form className="space-y-5 flex-1 max-w-[560px]">
            {/* Username */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className={fieldClasses}
              />
            </div>

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

            {/* Full Name / NGO Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your Full name or Organization name"
                className={fieldClasses}
              />
            </div>

            {/* I am a */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                I am a
              </label>
              <select
                className={
                  fieldClasses +
                  " appearance-none cursor-pointer pr-10 bg-white"
                }
                defaultValue="ngo"
              >
                <option value="volunteer">Volunteer</option>
                <option value="ngo">NGO / Organization</option>
              </select>
            </div>

            {/* Location (Optional) */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Location (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. New York, NY"
                className={fieldClasses}
              />
            </div>

            {/* Organization description */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Organization description
              </label>
              <textarea
                placeholder="Tell us about your organization’s mission and goals"
                className={
                  fieldClasses +
                  " min-h-[96px] resize-none align-top"
                }
              />
            </div>

            {/* Website URL (Optional) */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Website URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://www.yourorganization.org"
                className={fieldClasses}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-[#FF7A1A] py-3 text-sm font-semibold text-white 
                         shadow-[0_6px_12px_rgba(249,115,22,0.45)] hover:bg-[#FF6A00] transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* bottom login link */}
          <p className="mt-5 text-center text-xs text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sky-600 font-medium hover:underline"
            >
              Login
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
            alt="NGO working at computer"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default SignupNGO;
