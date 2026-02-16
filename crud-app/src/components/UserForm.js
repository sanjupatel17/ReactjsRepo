import { useState, useRef, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";

const UserForm = ({ addUser, editUser, updateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const ageRef = useRef();

  // Auto focus on mount
  useEffect(() => {
    document.getElementById("nameInput")?.focus();
  }, []);

  // Fill data when editing
  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
      ageRef.current.value = editUser.age;
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      id: editUser ? editUser.id : Date.now(),
      name,
      email,
      age: ageRef.current.value
    };

    if (editUser) {
      updateUser(userData);
    } else {
      addUser(userData);
    }

    setName("");
    setEmail("");
    ageRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        id="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="input-group">
        <label>Age</label>
      <input type="number" 
           ref={ageRef}
           min="1"
           onWheel={(e) => e.target.blur()}
/>
      </div>

      <Button
        text={editUser ? "Update User" : "Add User"}
        type="submit"
        className="add-btn"
      />
    </form>
  );
};

export default UserForm;
