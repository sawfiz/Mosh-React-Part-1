import useUsers from "../hooks/useUsers.ts";
import userService, { User } from "../services/user-service";

const UserList = () => {
  const { users, setUsers, error, setError, isLoading } = useUsers();

  const deleteUser = (user: User) => {
    // Optimistic update, render first to provide a faster UI
    const originalUsers = users;
    setUsers(users.filter((u) => u.id != user.id));

    //API call
    userService.delete(user.id).catch((err) => {
      // On error, keep the original Users list
      setUsers(originalUsers);
      setError(err.message);
    });
  };

  const addUser = () => {
    const originalUsers = users;
    const newUser: User = { id: 11, name: "Victor" };
    // Optimistic update
    setUsers([...users, newUser]);

    // API call
    userService
      .create(newUser)
      // .then((res) => setUsers([...users, res.data]))
      // deconstruct res.data, and assign it a name newUser
      .then(({ data: newUser }) => setUsers([...users, newUser]))
      .catch((err) => {
        setUsers(originalUsers);
        setError(err.message);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = users;
    const updatedUser = { ...user, name: user.name + "!" };
    // Optimistic update
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // API call
    userService.update(updatedUser).catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    });
  };

  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div className="d-flex gap-2">
              <button
                className="btn btn-secondary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default UserList;
