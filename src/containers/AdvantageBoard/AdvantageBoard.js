import React from "react";
import { Board } from "../../containers";
import { ADVANTAGE } from "../../constants/game";

const AdvantageBoard = () => {
  return <Board gameLevel={ADVANTAGE} />;
};

export default AdvantageBoard;
