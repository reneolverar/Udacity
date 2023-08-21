import logo from "./logo.svg";
import "./App.css";
import { useState } from "react"

const App = () => {

  const [value, setValue] = useState("")

  const updateValue = (event) => {
      setValue(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text" placeholder="Say Something"
          value={value}
          onChange={updateValue}
        />
        <p className="echo">Echo:</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default App;
