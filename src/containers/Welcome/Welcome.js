import React from "react";
import { Welcome } from "../../components";
import { useActions } from "../../utils/hookRecipes";
import { MiniMineSweeperActions } from "../../reducers/miniMineSweeper/miniMineSweeperActions";

const WelcomeContainer = () => {
  const newGame = useActions(MiniMineSweeperActions.newGame);
  return <Welcome newGame={newGame} />;
};

export default WelcomeContainer;
