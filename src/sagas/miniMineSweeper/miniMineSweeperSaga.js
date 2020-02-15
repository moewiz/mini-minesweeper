import { takeLeading, call, put } from "redux-saga/effects";
import _ from "lodash";
import {
  types as MiniMineSweeperTypes,
  actions as MiniMineSweeperActions
} from "../../reducers/miniMineSweeper";
import MiniMineSweeperService from "./miniMineSweeperService";

function getAPIErrorMessage(error, defaultMessage = "Internal server error") {
  return _.get(error, "response.data.msg", defaultMessage);
}

function* setupGame({ payload: { size, mines } }) {
  try {
    const response = yield call(MiniMineSweeperService.fetchMines, {
      size,
      mines
    });
    const { data } = response.data;
    console.log(data);
    const matrices = [];
    yield put(MiniMineSweeperActions.setupSuccess(matrices));
  } catch (error) {
    yield put(MiniMineSweeperActions.setupFailed(getAPIErrorMessage(error)));
  }
}

export default function*() {
  yield takeLeading(MiniMineSweeperTypes.SETUP_GAME, setupGame);
}
