import { Link } from "react-router-dom";
import "./PatientDashboard.css";

export default function PatientDashboard({ appointments }) {
  const upcoming = appointments.filter((a) => a.status === "upcoming");
  const completed = appointments.filter((a) => a.status === "completed");

  return (
    <div className="page">
      <h1 className="page-title">My Dashboard</h1>
      <p className="page-sub">Track and manage your appointments</p>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="val">{appointments.length}</div>
          <div className="lbl">Total Booked</div>
        </div>
        <div className="stat-card">
          <div className="val">{upcoming.length}</div>
          <div className="lbl">Upcoming</div>
        </div>
        <div className="stat-card">
          <div className="val">{completed.length}</div>
          <div className="lbl">Completed</div>
        </div>
      </div>

      {/* Appointment List */}
      <div className="section-heading">Upcoming Appointments</div>

      {upcoming.length === 0 ? (
        <div className="empty">
          <p>No upcoming appointments.</p>
          <Link to="/" className="btn-primary" style={{ marginTop: "1rem" }}>
            Book Now
          </Link>
        </div>
      ) : (
        <div className="appt-list">
          {upcoming.map((appt, i) => (
            <div key={i} className="appt-item">
              <div className="appt-left">
                <div className="appt-avatar">{appt.doctor.initials}</div>
                <div className="appt-info">
                  <div className="appt-name">{appt.doctor.name}</div>
                  <div className="appt-time">
                    {appt.date} &bull; {appt.slot}
                  </div>
                  {appt.reason && (
                    <div className="appt-reason">{appt.reason}</div>
                  )}
                </div>
              </div>
              <span className="status-badge upcoming">Upcoming</span>
            </div>
          ))}
        </div>
      )}

      {completed.length > 0 && (
        <>
          <div className="section-heading" style={{ marginTop: "2rem" }}>Past Appointments</div>
          <div className="appt-list">
            {completed.map((appt, i) => (
              <div key={i} className="appt-item">
                <div className="appt-left">
                  <div className="appt-avatar completed">{appt.doctor.initials}</div>
                  <div className="appt-info">
                    <div className="appt-name">{appt.doctor.name}</div>
                    <div className="appt-time">
                      {appt.date} &bull; {appt.slot}
                    </div>
                  </div>
                </div>
                <span className="status-badge done">Completed</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
