import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import DoctorListing from "./Components/DoctorListing";
import AppointmentBooking from "./Components/AppointmentBooking";
import PatientDashboard from "./Components/Patientdashboard";
import PatientProfile from "./Components/PatientProfile";

import "./index.css";

export default function App() {
  const [appointments, setAppointments] = useState([]);

  const handleBook = (apptData) => {
    setAppointments((prev) => [
      ...prev,
      { ...apptData, status: "upcoming" },
    ]);
  };

return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DoctorListing />} />
        <Route path="/book/:doctorId" element={<AppointmentBooking onBook={handleBook} />} />
        <Route path="/dashboard" element={<PatientDashboard appointments={appointments} />} />
        <Route path="/profile" element={<PatientProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
