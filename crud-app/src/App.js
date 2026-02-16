import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Load data (Mount)
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // Save data when users change (Update)
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setEditUser(null);
  };

  return (
    <div className="app-container">
      <h2>User CRUD Application</h2>

      <UserForm
        addUser={addUser}
        editUser={editUser}
        updateUser={updateUser}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        setEditUser={setEditUser}
      />
    </div>
  );
}

export default App;
