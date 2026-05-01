import { Link } from "react-router-dom";
import "./DoctorCard.css";

export default function DoctorCard({ doctor }) {
  return (
<Link to={`/book/${doctor.id}`} className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="avatar" />
      <div className="doctor-name">{doctor.name}</div>
      <div className="doctor-spec">{doctor.specialty}</div>
      <div className="doctor-meta">
        <span>⭐ {doctor.rating}</span>
        <span>🩺 {doctor.exp}</span>
      </div>
      <span className={`badge ${doctor.available ? "badge-green" : "badge-red"}`}>
        {doctor.available ? "Available" : "Unavailable"}
      </span>
    </Link>
  );
}
