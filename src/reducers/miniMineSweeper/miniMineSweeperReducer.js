import { types } from "../miniMineSweeper";
import { GAME_STATUS } from "../../constants/game";

const INITIAL_STATE = {
  loading: false,
  error: null,
  gameStatus: GAME_STATUS.NOT_START,
  matrices: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SETUP_GAME:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.SETUP_GAME_SUCCES:
      const { matrices } = payload;
      return {
        ...state,
        matrices,
        loading: false,
        error: null
      };
    case types.SETUP_GAME_FAILED:
      const { error } = payload;
      return {
        ...state,
        loading: false,
        error
      };
    case types.NEW_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};
