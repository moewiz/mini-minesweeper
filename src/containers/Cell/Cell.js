import React from "react";
import { Cell } from "../../components";
import {
  actions as MiniMineSweeperActions,
  selectors as MiniMineSweeperSelectors
} from "../../reducers/miniMineSweeper";
import { useShallowEqualSelector, useActions } from "../../utils/hookRecipes";

const CellContainer = props => {
  const openCell = useActions(MiniMineSweeperActions.openCell);
  const gameStatus = useShallowEqualSelector(
    MiniMineSweeperSelectors.getGameStatus
  );

  return <Cell {...props} openCell={openCell} gameStatus={gameStatus} />;
};

export default CellContainer;
