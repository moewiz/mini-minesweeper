import React from "react";
import { Board } from "../../containers";
import { BEGINNER } from "../../constants/game";
import { useActions } from "../../utils/hookRecipes";
import { MiniMineSweeperActions } from "../../reducers/miniMineSweeper/miniMineSweeperActions";

const BeginnerBoard = () => {
  const setupGame = useActions(MiniMineSweeperActions.setupBeginnerGame);
  return <Board gameLevel={BEGINNER} setupGame={setupGame} />;
};

export default BeginnerBoard;
