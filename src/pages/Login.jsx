import { Link } from "react-router-dom";
import "./../styles/form.css";
import illustration from "../assets/illustration.png";

function Login() {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Login to your NGO Account</h2>
        <p className="sub">Access SkillBridge to manage NGO projects and volunteers.</p>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Create a password" />

        <button className="btn">Login</button>

        <p className="switch">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <div className="image-box">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  );
}

export default Login;
