import PropTypes from "prop-types";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";

const ChatWindow = ({ user, messages, onAddMessage }) => {

    const handleOnAddMessage = (message) => {
        onAddMessage(user.username, message)
    }

  return (
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>

          <MessageHistory user={user} messages={messages}/>

          <AddMessage onAddMessage={handleOnAddMessage}/>
        </div>
  );
};

ChatWindow.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;
