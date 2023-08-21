import PropTypes from "prop-types";

const Score = ({ numCorrect, numQuestions  }) => {

  return (
       <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
  );
};

Score.propTypes = {
    numCorrect: PropTypes.number.isRequired,
    numQuestions: PropTypes.number.isRequired,
};

export default Score;
