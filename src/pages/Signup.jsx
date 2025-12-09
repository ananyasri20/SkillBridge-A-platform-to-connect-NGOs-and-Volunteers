import { Link } from "react-router-dom";
import "./../styles/form.css";
import illustration from "../assets/illustration.png";

function Signup() {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Create an Account</h2>
        <p className="sub">Join SkillBridge to connect NGOs and volunteers.</p>

        <input type="text" placeholder="Enter username" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Create a password" />
        <input type="text" placeholder="Full Name" />

        <select>
          <option>NGO / Organization</option>
        </select>

        <input type="text" placeholder="Location (Optional)" />
        <input type="text" placeholder="Organization Description" />
        <input type="text" placeholder="Website URL (optional)" />

        <button className="btn">Create Account</button>

        <p className="switch">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>

      <div className="image-box">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
}

export default Signup;
