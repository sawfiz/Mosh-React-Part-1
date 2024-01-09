import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      }
      catch (err) {
        setError((err as AxiosError).message);
      }
    };
    
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default UserList;
