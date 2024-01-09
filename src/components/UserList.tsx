import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Allow us to cancel aync operations
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // Removes the error in strict mode, as the component is rendered twice
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally does not work in strict mode
    // .finally(() => setLoading(false));

    // Clean up function
    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    // Optimistic update, render first to provide a faster UI
    const originalUsers = users;
    setUsers(users.filter((u) => u.id != user.id));

    //API call
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
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
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => {
        setUsers(originalUsers);
        setError(err);
      });
  };

  return (
    <div>
      {loading && <div className="spinner-border"></div>}
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
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default UserList;
