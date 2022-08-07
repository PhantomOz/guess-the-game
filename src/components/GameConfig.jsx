import React, { useContext } from "react";
import { GuessBoundsContext } from "../store/GuessBounds";
import BoundsInput from "./BoundsInput";

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
      <BoundsInput
        name={"lowBound"}
        value={gameConfig.lowBound}
        handleChange={handleChange}
      />
      <BoundsInput
        name={"highBound"}
        value={gameConfig.highBound}
        handleChange={handleChange}
      />
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
