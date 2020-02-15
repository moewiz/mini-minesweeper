import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  actions as MiniMineSweeperActions,
  selectors as MiniMineSweeperActionsSelectors
} from "../../reducers/miniMineSweeper";
import { useActions, useShallowEqualSelector } from "../../utils/hookRecipes";
import { Board } from "../../components";

const BoardContainer = ({ gameLevel, ...props }) => {
  const setupGame = useActions(MiniMineSweeperActions.setupGame);

  useEffect(() => {
    setupGame(gameLevel);
  }, [gameLevel.size]);

  const matrices = useShallowEqualSelector(
    MiniMineSweeperActionsSelectors.getMatrices
  );
  const isLoading = useShallowEqualSelector(
    MiniMineSweeperActionsSelectors.getLoading
  );
  const error = useShallowEqualSelector(
    MiniMineSweeperActionsSelectors.getError
  );

  return (
    <Board {...props} matrices={matrices} isLoading={isLoading} error={error} />
  );
};

BoardContainer.propTypes = {
  gameLevel: PropTypes.shape({
    size: PropTypes.number,
    mines: PropTypes.number
  }).isRequired
};

export default BoardContainer;
