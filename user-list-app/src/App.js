import React, { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  // Store users in state
  const [users, setUsers] = useState([
    { id: 1, name: "Sanjay", email: "sanjay@gmail.com", active: true },
    { id: 2, name: "Diya", email: "diya@gmail.com", active: false },
    { id: 3, name: "Patel", email: "patel@gmail.com", active: true }
  ]);

  // Toggle user status
  const toggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, active: !user.active } : user
    );
    setUsers(updatedUsers);
  };

  // Remove user
  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User List App</h1>

      {/* Conditional Rendering */}
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            toggleStatus={toggleStatus}
            removeUser={removeUser}
          />
        ))
      )}
    </div>
  );
}

export default App;
