import DoctorCard from "./DoctorCard";
import { doctors } from "../data/doctors";
import "./DoctorListing.css";

export default function DoctorListing() {
  return (
    <div className="page">
      <h1 className="page-title">Find a Doctor</h1>
      <p className="page-sub">Book appointments with top specialists near you</p>
      <div className="doctor-grid">
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
