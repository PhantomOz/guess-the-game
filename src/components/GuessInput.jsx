import React, { useContext, useState } from "react";
import { GuessBoundsContext } from "../store/GuessBounds";

function GuessInput() {
  const [guess, setGuess] = useState();
  const [lastGuess, setLastGuess] = useState();
  const [error, setError] = useState([]);
  const [result, setResult] = useState("");
  const [{ lowBound, highBound }] = useContext(GuessBoundsContext);

  //   For generating random Integers
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  // for checking errors from input
  function handleCheck() {
    let errors = [];
    if (!lowBound || !highBound) {
      errors.push("Invalid Bounds");
    }
    if (highBound - lowBound < 4) {
      errors.push(
        "The Lower and Higher Bounds show be in the range atleast +4"
      );
    }
    if (!guess || guess < lowBound || guess > highBound) {
      errors.push("Invalid Guess");
    }
    return errors;
  }

  // for checking if the guess is correct
  function checkGuess() {
    setResult("");
    let x = getRandomInt(lowBound, highBound);
    if (parseInt(guess) === x) {
      setResult("You got it 🥳");
    } else if (guess < x) {
      setResult("Higher");
    } else {
      setResult("Lower");
    }
    setLastGuess(guess);
  }

  //   To the handle the form submit method
  const handleSubmit = (e) => {
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
        Guess the number between {lowBound} and {highBound}
      </p>
      <p>Last Guess: {lastGuess}</p>
      {error.map((err) => (
        <div className="alert alert-danger">{err}</div>
      ))}
      {result.length !== 0 && (
        <div
          className={
            result === "You got it 🥳"
              ? "alert alert-success"
              : "alert alert-warning"
          }
        >
          {result}
        </div>
      )}
      <form onSubmit={handleSubmit} className="input-group">
        <label className="input-group-text">Guess</label>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-success">
          Make Guess
        </button>
      </form>
    </div>
  );
}

export default GuessInput;
