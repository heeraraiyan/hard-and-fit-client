import { useEffect, useState } from "react";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {
        users.map((user, index) => (
          <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role === 'admin' ? 'admin' : <button> Admin</button>}</td>
            <td><button>No Admin</button></td>
          </tr>
        ))
      }
    </div>
  );
};

export default AllUser;
