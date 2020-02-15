import React from "react";
import { Board } from "../../containers";
import { BEGINNER } from "../../constants/game";

const BeginnerBoard = () => {
  return <Board gameLevel={BEGINNER} />;
};

export default BeginnerBoard;
