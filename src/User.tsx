import { useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
  phone: number;
  company: {
    name: string;
  };
}

function User() {
  const [users, setUsers] = useState<User[]>([]);

  //axios

  axios
    .get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setUsers(response.data);
    });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address.street</th>
            <th>Phone</th>
            <th>Company.name</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && <p>Loading users...</p>}
    </div>
  );
}

export default User;
