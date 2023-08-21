import styles from "./App.module.css";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {

  const [messages, setMessages] = useState([
    { username: "Amy", text: "Hi, Jon!" },
    { username: "Amy", text: "How are you?" },
    { username: "John", text: "Hi, Amy! Good, you?" },
  ]);

  const addMessage = (username, message) => {
    const newMessage = { username: username, text: message }
    setMessages([...messages, newMessage])
  }

  return (
    <div className={`${styles.App}`}>
      <div className={`${styles.container}`}>
        {users.map((user) => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onAddMessage={addMessage}
          />
        ))}

      </div>
    </div>
  );
};

export default App;
