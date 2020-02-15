// import { GAME_STATUS } from "../../constants/game";

export const MiniMineSweeperTypes = {
  SETUP_GAME: "MiniMineSweeper/SETUP_GAME",
  SETUP_GAME_SUCCES: "MiniMineSweeper/SETUP_GAME_SUCCES",
  SETUP_GAME_FAILED: "MiniMineSweeper/SETUP_GAME_FAILED",
  NEW_GAME: "MiniMineSweeper/NEW_GAME"
};

export const MiniMineSweeperActions = {
  setupGame: ({ size, mines }) => ({
    type: MiniMineSweeperTypes.SETUP_GAME,
    payload: { size, mines }
  }),
  setupSuccess: matrices => ({
    type: MiniMineSweeperTypes.SETUP_GAME_SUCCES,
    payload: { matrices }
  }),
  setupFailed: error => ({
    type: MiniMineSweeperTypes.SETUP_GAME_FAILED,
    payload: { error }
  }),
  newGame: () => ({
    type: MiniMineSweeperTypes.NEW_GAME
  })
};

const getMatrices = ({ miniMineSweeper }) => miniMineSweeper.matrices;
const getLoading = ({ miniMineSweeper }) => miniMineSweeper.loading;
const getError = ({ miniMineSweeper }) => miniMineSweeper.error;

export const MiniMineSweeperSelectors = {
  getMatrices,
  getLoading,
  getError
};
