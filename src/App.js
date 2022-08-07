// import logo from "./logo.svg";
import "./App.css";
import GameConfig from "./components/GameConfig";
import GuessInput from "./components/GuessInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="gameplay">
        <h1>
          Play! <FontAwesomeIcon icon="fa-solid fa-face-thinking" />
        </h1>
        <GuessInput />
        <div className="gameconfig">
          <GameConfig />
        </div>
      </div>
    </div>
  );
}

export default App;
