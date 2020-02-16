import { BEGINNER, ADVANTAGE } from "../../constants/game";

export const MiniMineSweeperTypes = {
  SETUP_GAME: "MiniMineSweeper/SETUP_GAME",
  SETUP_GAME_SUCCES: "MiniMineSweeper/SETUP_GAME_SUCCES",
  SETUP_GAME_FAILED: "MiniMineSweeper/SETUP_GAME_FAILED",
  NEW_GAME: "MiniMineSweeper/NEW_GAME",
  OPEN_CELL: "MiniMineSweeper/OPEN_CELL",
  OPEN_NEIGHBORS: "MiniMineSweeper/OPEN_NEIGHBORS"
};

const setupGame = ({ size, mines }) => () => ({
  type: MiniMineSweeperTypes.SETUP_GAME,
  payload: { size, mines }
});

export const MiniMineSweeperActions = {
  setupBeginnerGame: setupGame(BEGINNER),
  setupAdvantageGame: setupGame(ADVANTAGE),
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
  }),
  openCell: cell => ({
    type: MiniMineSweeperTypes.OPEN_CELL,
    payload: {
      cell
    }
  }),
  openNeighbors: neighbors => ({
    type: MiniMineSweeperTypes.OPEN_NEIGHBORS,
    payload: {
      neighbors
    }
  })
};

const getMatrices = ({ miniMineSweeper }) => miniMineSweeper.matrices;
const getLoading = ({ miniMineSweeper }) => miniMineSweeper.loading;
const getError = ({ miniMineSweeper }) => miniMineSweeper.error;
const getGameStatus = ({ miniMineSweeper }) => miniMineSweeper.gameStatus;
const getStartTime = ({ miniMineSweeper }) => miniMineSweeper.startTime;

export const MiniMineSweeperSelectors = {
  getMatrices,
  getLoading,
  getError,
  getGameStatus,
  getStartTime
};
