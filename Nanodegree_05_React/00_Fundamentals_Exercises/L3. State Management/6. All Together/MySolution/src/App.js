import logo from "./logo.svg";
import "./App.css";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <AddUser users={users} onAddUser={createUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
