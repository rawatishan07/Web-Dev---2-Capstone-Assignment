import { useState } from "react";
import { Link } from "react-router-dom";
import "./PatientProfile.css";

export default function PatientProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 234 567 8900",
    dateOfBirth: "1990-05-15",
    address: "123 Main Street, New York, NY 10001",
    bloodType: "A+",
    emergencyContact: "Jane Doe (+1 987 654 3210)",
  });

  const [editForm, setEditForm] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  return (
    <div className="page">
      <div className="profile-header">
        <h1 className="page-title">My Profile</h1>
        <p className="page-sub">Manage your personal information</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </div>
          {!isEditing && (
            <button className="btn-edit" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>

        <div className="profile-fields">
          <div className="field-group">
            <label>Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleChange}
                className="input-field"
              />
            ) : (
              <div className="field-value">{profile.name}</div>
            )}
          </div>

          <div className="field-group">
            <label>Email Address</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleChange}
                className="input-field"
              />
            ) : (
              <div className="field-value">{profile.email}</div>
            )}
          </div>

          <div className="field-group">
            <label>Phone Number</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={editForm.phone}
                onChange={handleChange}
                className="input-field"
              />
            ) : (
              <div className="field-value">{profile.phone}</div>
            )}
          </div>

          <div className="field-group">
            <label>Date of Birth</label>
            {isEditing ? (
              <input
                type="date"
                name="dateOfBirth"
                value={editForm.dateOfBirth}
                onChange={handleChange}
                className="input-field"
              />
            ) : (
              <div className="field-value">{profile.dateOfBirth}</div>
            )}
          </div>

          <div className="field-group">
            <label>Address</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={editForm.address}
                onChange={handleChange}
                className="input-field"
              />
            ) : (
              <div className="field-value">{profile.address}</div>
            )}
          </div>

          <div className="field-group">
            <label>Blood Type</label>
            {isEditing ? (
              <select
                name="bloodType"
                value={editForm.bloodType}
                onChange={handleChange}
                className="input-field"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            ) : (
              <div className="field-value">{profile.bloodType}</div>
            )}
          </div>

          <div className="field-group">
            <label>Emergency Contact</label>
            {isEditing ? (
              <input
                type="text"
                name="emergencyContact"
                value={editForm.emergencyContact}
                onChange={handleChange}
                className="input-field"
              />
            ) : (
              <div className="field-value">{profile.emergencyContact}</div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="profile-actions">
            <button className="btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn-save" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="profile-links">
        <Link to="/dashboard" className="link-btn">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
