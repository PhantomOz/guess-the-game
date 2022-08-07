import React, { useContext, useEffect, useState } from "react";
import { GuessBoundsContext } from "../store/GuessBounds";

function GuessInput() {
  const [guess, setGuess] = useState();
  const [error, setError] = useState([]);
  const [gameConfig, setGameConfig] = useContext(GuessBoundsContext);
  const [randInt, setRandInt] = useState(1);

  useEffect(() => {
    let x = getRandomInt(gameConfig.lowBound, gameConfig.highBound);
    setRandInt(x);
  }, [gameConfig.highBound, gameConfig.lowBound]);

  //   For generating random Integers
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  // for checking errors from input
  function handleCheck() {
    let errors = [];
    if (!gameConfig.lowBound || !gameConfig.highBound) {
      errors.push("Invalid Bounds");
    }
    if (gameConfig.highBound - gameConfig.lowBound < 4) {
      errors.push(
        "The Lower and Higher Bounds show be in the range atleast +4"
      );
    }
    if (
      !guess ||
      parseInt(guess) < parseInt(gameConfig.lowBound) ||
      parseInt(guess) > parseInt(gameConfig.highBound)
    ) {
      errors.push("Invalid Guess");
    }
    return errors;
  }

  // for checking if the guess is correct
  function checkGuess() {
    let newResult = gameConfig;
    if (parseInt(guess) === randInt) {
      newResult.result = "You got it 🥳";
      setGameConfig({ ...newResult });
      getRandomInt(gameConfig.lowBound, gameConfig.highBound);
    } else if (guess < randInt) {
      newResult.result = "Higher";
      setGameConfig({ ...newResult });
    } else {
      newResult.result = "Lower";
      setGameConfig({ ...newResult });
    }
    setGameConfig({ ...gameConfig, lastGuess: guess });
    console.log(gameConfig.result);
  }

  //   To the handle the form submit method
  const handleSubmit = (e) => {
    setGameConfig({ ...gameConfig, result: "" });
    e.preventDefault();
    setError([]);
    let err = handleCheck();
    if (err.length === 0) {
      checkGuess();
    } else {
      setError([...err]);
    }
  };

  return (
    <div className="m-3">
      <p>
        Guess the number between {gameConfig.lowBound} and{" "}
        {gameConfig.highBound}
      </p>
      <p>Last Guess: {gameConfig.lastGuess}</p>
      {error.map((err) => (
        <div className="alert alert-danger">{err}</div>
      ))}
      {gameConfig.result.length !== 0 && (
        <div
          className={
            gameConfig.result === "You got it 🥳"
              ? "alert alert-success"
              : "alert alert-warning"
          }
        >
          {gameConfig.result}
        </div>
      )}
      <form onSubmit={handleSubmit} className="input-group">
        <label htmlFor="guess" className="input-group-text">
          Guess
        </label>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="form-control"
          id="guess"
        />
        <button type="submit" className="btn btn-success">
          Make Guess
        </button>
      </form>
    </div>
  );
}

export default GuessInput;
