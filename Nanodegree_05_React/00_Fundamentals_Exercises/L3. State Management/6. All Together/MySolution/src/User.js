import PropTypes from "prop-types";

const User = ({ user, showGamesPlayed }) => {
  return (
    <li className="user">
        <p>Username: {user.userName}</p>
        <p>Number of Games Played: {showGamesPlayed ? user.numberOfGamesPlayed : "*"}</p>
    </li>
  );
};

User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;
