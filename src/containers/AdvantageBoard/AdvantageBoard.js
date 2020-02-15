import React from "react";
import { Board } from "../../containers";
import { ADVANTAGE } from "../../constants/game";
import { useActions } from "../../utils/hookRecipes";
import { MiniMineSweeperActions } from "../../reducers/miniMineSweeper/miniMineSweeperActions";

const AdvantageBoard = () => {
  const setupGame = useActions(MiniMineSweeperActions.setupAdvantageGame);
  return <Board gameLevel={ADVANTAGE} setupGame={setupGame} />;
};

export default AdvantageBoard;
