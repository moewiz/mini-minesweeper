import React from "react";
import { Cell } from "../../components";
import { GAME_STATUS } from "../../constants/game";

const CellContainer = props => {
  const openCell = cell => {
    console.log("click on cell", cell);
  };
  const gameStatus = GAME_STATUS.WIN;

  return <Cell {...props} openCell={openCell} gameStatus={gameStatus} />;
};

export default CellContainer;
