import { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Rene",
      lastName: "Olvera Romero",
      userName: "reneor",
      numberOfGamesPlayed: 5,
    },
  ])

  const createUser = (user) => {
    user.numberOfGamesPlayed = 0
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <h2>Add new user and show/hide value</h2>
      <AddUser users={users} onAddUser={createUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
