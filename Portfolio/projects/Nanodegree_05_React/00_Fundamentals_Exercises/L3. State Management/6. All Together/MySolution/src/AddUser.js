import PropTypes from "prop-types"
import { useState } from "react"

const AddUser = ({users, onAddUser}) => {
    const [userExists, setUserExists] = useState(false)
    const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      userName: "",
    });

    const checkUserExists = (userName) => {
      users.forEach(user => {
        if (user === userName) {
          return true;
        }
      })
      return false;
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userAlreadyExists = checkUserExists(user.userName)
    if (!userAlreadyExists) {
      onAddUser(user)
    }
    setUserExists(userAlreadyExists)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({...user, [name]: value})
  }

  const isDisabled = () => {
    const { firstName, lastName, userName } = user;
    return firstName === "" || lastName === "" || userName === ""
  }

  return (
    <div>
      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input value={user.firstName} onChange={handleInputChange} placeholder="Enter First Name" type="text" name="firstName"></input>
          <input value={user.lastName} onChange={handleInputChange} placeholder="Enter Last Name" type="text" name="lastName"></input>
          <input value={user.userName} onChange={handleInputChange} placeholder="Enter username" type="text" name="userName"></input>
        </div>
        <button disabled={isDisabled()}>Add</button>
      </form>
      {userExists ? <p className="error">Username already exists</p> : ""}
    </div>
  );
};

AddUser.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default AddUser;
