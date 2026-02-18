import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="page">
      <h2>Welcome, {user?.username}</h2>

      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>

      <br />

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
