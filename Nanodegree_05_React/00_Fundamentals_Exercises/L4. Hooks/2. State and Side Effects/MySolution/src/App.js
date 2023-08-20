import logo from "./logo.svg";
import "./App.css";
import Score from "./Score";
import Game from "./Game";

const numQuestions = 0;
const numCorrect = 0;

const handleAnswer = (answer) => {

}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game handleAnswer={handleAnswer} />
        <Score numCorrect={numCorrect} numQuestions={numQuestions}/>
      </div>
    </div>
  );
};

export default App;
