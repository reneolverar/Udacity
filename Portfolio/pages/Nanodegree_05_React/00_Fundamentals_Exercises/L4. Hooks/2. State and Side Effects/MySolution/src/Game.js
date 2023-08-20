import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Game = ({ handleAnswer }) => {

    const [gameValues, setGameValues] = useState({})

      useEffect(() => {
          makeNewGame()
      }, []);

    const makeNewGame = () => {
        setGameValues(makeNewQuestion())
    }

    const makeNewQuestion = () => {
        let newQuestion = {
            value1: Math.floor(Math.random() * 100),
            value2: Math.floor(Math.random() * 100),
            value3: Math.floor(Math.random() * 100),
        }
        newQuestion.proposedAnswer = Math.floor(Math.random() * 3) + newQuestion.value1 + newQuestion.value2 + newQuestion.value3
        return newQuestion
    }

    const handleInput = (event) => {
        const correctAnswer = gameValues.proposedAnswer === gameValues.value1 + gameValues.value2 + gameValues.value3
        if (correctAnswer === eval(event.target.name)) {
            handleAnswer(true)
        } else {
            handleAnswer(false)
        }
        makeNewGame();
    }

  return (
       <div>
            <div className="equation">
            <p className="text">{`${gameValues.value1} + ${gameValues.value2} + ${gameValues.value3} = ${gameValues.proposedAnswer}`}</p>
            </div>
            <button name="true" onClick={handleInput}>True</button>
            <button name="false" onClick={handleInput}>False</button>
        </div>
  );
};

Game.propTypes = {
    handleAnswer: PropTypes.func.isRequired,
};

export default Game;
