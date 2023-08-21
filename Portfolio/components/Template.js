import styles from "./App.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Template = ({ prop  }) => {

    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        prop(message)
        setMessage("")
    }

  return (
        <>

        </>
  );
};

Template.propTypes = {
  prop: PropTypes.func.isRequired,
};

export default Template;
