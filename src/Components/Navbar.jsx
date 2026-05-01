import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">MedBook</Link>
      <div className="nav-links">
        <Link to="/">Doctors</Link>
        <Link to="/dashboard">My Appointments</Link>
        <Link to="/profile">My Profile</Link>
      </div>
    </nav>
  );
}
