import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { doctors, timeSlots } from "../data/doctors";
import "./AppointmentBooking.css";

export default function AppointmentBooking({ onBook }) {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === Number(doctorId));

  const [selectedSlot, setSelectedSlot] = useState("");
  const [date, setDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [reason, setReason] = useState("");

  if (!doctor) {
    return (
      <div className="page">
        <p>Doctor not found.</p>
        <Link to="/" className="btn-outline" style={{ marginTop: "1rem" }}>
          Back to Listing
        </Link>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!selectedSlot || !date || !patientName) return;
    onBook({ doctor, slot: selectedSlot, date, patientName, reason });
    navigate("/dashboard");
  };

  const isReady = selectedSlot && date && patientName;

  return (
    <div className="page">
      <Link to="/" className="back-link">← Back to Doctors</Link>

      <div className="booking-card">
        {/* Doctor Header */}
        <div className="doctor-header">
          <div className="avatar-lg">{doctor.initials}</div>
          <div>
            <h2 className="booking-doc-name">{doctor.name}</h2>
            <p className="booking-doc-spec">{doctor.specialty} &bull; {doctor.exp} experience</p>
            <span className={`badge ${doctor.available ? "badge-green" : "badge-red"}`}>
              {doctor.available ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>

        {/* Date */}
        <div className="input-group">
          <label>Select Date</label>
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Time Slots */}
        <div className="section-label">Select Time Slot</div>
        <div className="slot-grid">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              className={`slot-btn ${selectedSlot === slot ? "selected" : ""}`}
              onClick={() => setSelectedSlot(slot)}
              disabled={!doctor.available}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Patient Info */}
        <div className="input-group">
          <label>Patient Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Reason for Visit (optional)</label>
          <input
            type="text"
            placeholder="e.g. Regular check-up"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <button
          className="btn-primary"
          onClick={handleSubmit}
          disabled={!isReady || !doctor.available}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
