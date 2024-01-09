import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    
    fetchData();
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
    </div>
  );
};

export default UserList;
