import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { selectors as MiniMineSweeperActionsSelectors } from "../../reducers/miniMineSweeper";
import { useShallowEqualSelector } from "../../utils/hookRecipes";
import { Board } from "../../components";

const BoardContainer = ({ gameLevel, setupGame, ...props }) => {
  useEffect(() => {
    setupGame();
  }, [setupGame]);

  const matrices = useShallowEqualSelector(
    MiniMineSweeperActionsSelectors.getMatrices
  );
  const loading = useShallowEqualSelector(
    MiniMineSweeperActionsSelectors.getLoading
  );
  const error = useShallowEqualSelector(
    MiniMineSweeperActionsSelectors.getError
  );

  return (
    <Board
      {...props}
      onNewGame={setupGame}
      gameLevel={gameLevel}
      matrices={matrices}
      loading={loading}
      error={error}
    />
  );
};

BoardContainer.propTypes = {
  gameLevel: PropTypes.shape({
    size: PropTypes.number,
    mines: PropTypes.number
  }).isRequired
};

export default BoardContainer;
