import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupVolunteer from "./pages/signup-volunteer.jsx";
import Login from "./pages/login.jsx";
import SignupNGO from "./pages/signup-NGO.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* default route -> signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignupVolunteer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
