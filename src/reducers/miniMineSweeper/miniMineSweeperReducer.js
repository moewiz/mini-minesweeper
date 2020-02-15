import dayjs from "dayjs";
import { types } from "../miniMineSweeper";
import { GAME_STATUS } from "../../constants/game";

const INITIAL_STATE = {
  loading: false,
  error: null,
  gameStatus: GAME_STATUS.NOT_START,
  matrices: [],
  startTime: 0,
  unOpenedCells: 0,
  mines: 0
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SETUP_GAME: {
      const { size, mines } = payload;
      return {
        ...state,
        gameStatus: GAME_STATUS.NOT_START,
        loading: true,
        error: null,
        startTime: 0,
        unOpenedCells: size * size,
        mines
      };
    }
    case types.SETUP_GAME_SUCCES: {
      const { matrices } = payload;
      return {
        ...state,
        matrices,
        loading: false,
        error: null
      };
    }
    case types.SETUP_GAME_FAILED: {
      const { error } = payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    case types.NEW_GAME:
      return INITIAL_STATE;
    case types.OPEN_CELL: {
      const { cell } = payload;

      // Game stopped
      if (
        state.gameStatus === GAME_STATUS.LOSE ||
        state.gameStatus === GAME_STATUS.WIN
      ) {
        return state;
      }
      if (cell.isOpen) {
        return state;
      }
      // Lose
      if (cell.minesAround === -1) {
        return {
          ...state,
          gameStatus: GAME_STATUS.LOSE
        };
      }
      const { matrices, unOpenedCells, mines, gameStatus } = state;
      // Win if
      if (unOpenedCells - 1 === mines) {
        return {
          ...state,
          gameStatus: GAME_STATUS.WIN,
          unOpenedCells: 0
        };
      }

      const { x, y } = cell;
      const updatedCell = { ...cell, isOpen: true };
      const updatedRow = [...matrices[x]];
      updatedRow[y] = updatedCell;
      const updatedMatrices = [...matrices];
      updatedMatrices[x] = updatedRow;

      // 1st Click
      if (gameStatus === GAME_STATUS.NOT_START) {
        return {
          ...state,
          matrices: updatedMatrices,
          startTime: dayjs(),
          gameStatus: GAME_STATUS.PLAYING,
          unOpenedCells: unOpenedCells - 1
        };
      }

      return {
        ...state,
        matrices: updatedMatrices,
        unOpenedCells: unOpenedCells - 1
      };
    }
    default:
      return state;
  }
};
