import React, { useState, createContext } from "react";

export const GuessBoundsContext = createContext();

const guessBounds = {
  lowBound: 1,
  highBound: 10,
};

export const GuessBoundsContextProvider = ({ children }) => {
  const [gameConfig, setGameConfig] = useState({ ...guessBounds });
  return (
    <GuessBoundsContext.Provider value={[gameConfig, setGameConfig]}>
      {children}
    </GuessBoundsContext.Provider>
  );
};
