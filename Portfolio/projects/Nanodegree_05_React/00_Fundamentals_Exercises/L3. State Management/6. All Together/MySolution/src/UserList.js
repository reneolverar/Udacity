import PropTypes from "prop-types";
import { useState } from "react";
import User from "./User";

const UserList = ({ users }) => {
  const [showGamesPlayed, setShowGamesPlayed] = useState(true);

  const toggleGamesPlayedPanel = () => {
    setShowGamesPlayed(!showGamesPlayed);
  };

  const gamesPlayedButton = (
    <div>
      <button className="smallButton" onClick={toggleGamesPlayedPanel}>
        {showGamesPlayed ? "Hide " : "Show "}
        the Number of Games Played
      </button>
    </div>
  );

  return (
    <div>
      <h2>Users</h2>
      {users && users.length > 0 ? gamesPlayedButton : ""}
      <ol>
        {users.map((user) => (
          <User
            key={user.userName}
            user={user}
            showGamesPlayed={showGamesPlayed}
          />
        ))}
      </ol>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
