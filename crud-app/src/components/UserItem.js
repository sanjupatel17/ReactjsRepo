import Button from "./Button";

const UserItem = ({ user, deleteUser, setEditUser }) => {
  return (
    <div className="user-card">
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Age:</b> {user.age}</p>

      <Button
        text="Edit"
        onClick={() => setEditUser(user)}
        className="edit-btn"
      />

      <Button
        text="Delete"
        onClick={() => deleteUser(user.id)}
        className="delete-btn"
      />
    </div>
  );
};

export default UserItem;
