import styles from "./App.module.css";
import Score from "./Score";
import Game from "./Game";
import { useState } from "react";

const App = () => {

  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const handleAnswer = (answer) => {
    if (answer) {
      setNumQuestions(numQuestions + 1)
      setNumCorrect(numCorrect + 1)
    } else {
      setNumQuestions(numQuestions + 1)
    }
  }

  return (
    <div className="App">
      <div className="game">
        <h2>Mental Math</h2>
        <Game handleAnswer={handleAnswer} />
        <Score numCorrect={numCorrect} numQuestions={numQuestions}/>
      </div>
    </div>
  );
};

export default App;
