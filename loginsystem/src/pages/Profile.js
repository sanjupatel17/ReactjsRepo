import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>User Profile</h2>
      <p>This is a protected page.</p>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default Profile;
