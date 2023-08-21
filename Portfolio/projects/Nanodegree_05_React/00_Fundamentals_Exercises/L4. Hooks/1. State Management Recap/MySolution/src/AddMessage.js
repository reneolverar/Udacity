import styles from "./App.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const AddMessage = ({ onAddMessage  }) => {

    const [message, setMessage] = useState("")

    const handleInputChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddMessage(message)
        setMessage("")
    }

    const isDisabled = () => {
        return message === ""
    }

  return (
        <div>
          <form className={`${styles['input-group']}`}
              onSubmit={handleSubmit}
          >
              <input
                type="text"
                className={`${styles['form-control']}`}
                  placeholder="Enter your message..."
                  value={message}
                  onChange={handleInputChange}
              />
              <div className={`${styles['input-group-append']}`}>
                  <button className={`${styles.btn} ${styles['submit-button']}`} disabled={isDisabled()} >
                  SEND
                </button>
              </div>
            </form>
          </div>
  );
};

AddMessage.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export default AddMessage;
