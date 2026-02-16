import UserItem from "./UserItem";

const UserList = ({ users, deleteUser, setEditUser }) => {
  return (
    <div>
      {users.length === 0 && (
        <p className="no-user">No Users Found</p>
      )}

      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setEditUser={setEditUser}
        />
      ))}
    </div>
  );
};

export default UserList;
