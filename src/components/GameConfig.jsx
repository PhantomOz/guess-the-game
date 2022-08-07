import React, { useContext } from "react";
import { GuessBoundsContext } from "../store/GuessBounds";

function GameConfig() {
  const initialState = { lowBound: 1, highBound: 10 };
  const [gameConfig, setGameConfig] = useContext(GuessBoundsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGameConfig({ ...gameConfig, [name]: value });
  };

  return (
    <div className="p-3">
      <h3>Game Config</h3>
      <div className="input-group mb-3">
        <label className="input-group-text">Lower Bound</label>
        <input
          type="number"
          min={1}
          value={gameConfig.lowBound}
          name="lowBound"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="input-group">
        <label className="input-group-text">Higher Bound</label>
        <input
          type="number"
          min={gameConfig.lowerBound + 2}
          value={gameConfig.highBound}
          name="highBound"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button
        className="btn btn-outline-primary m-3"
        onClick={() => setGameConfig({ ...initialState })}
      >
        Reset
      </button>
    </div>
  );
}

export default GameConfig;
