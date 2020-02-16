import { takeLeading, takeEvery, call, put } from "redux-saga/effects";
import _ from "lodash";
import {
  types as MiniMineSweeperTypes,
  actions as MiniMineSweeperActions
} from "../../reducers/miniMineSweeper";
import MiniMineSweeperService from "./miniMineSweeperService";

const make2DArrays = size => {
  return Array.from({ length: size }, (v, x) =>
    Array.from({ length: size }, (v, y) => ({
      x,
      y,
      minesAround: 0,
      isOpen: false
    }))
  );
};

export const generateMatrices = (size, minesList) => {
  // 1. Init default matrices
  const matrices = make2DArrays(size);

  // 2. Inject minesAround
  _.forEach(minesList, ({ x, y }) => {
    if (x < size && y < size) {
      // Mark cell as mine
      matrices[x][y].minesAround = -1;

      // Increase minesAround of 8 cells around this cell by 1
      for (let xoff = -1; xoff <= 1; xoff++) {
        for (let yoff = -1; yoff <= 1; yoff++) {
          const cx = x + xoff;
          const cy = y + yoff;
          // Ignore the cell out of the board
          if (cx < 0 || cx >= size) continue;
          if (cy < 0 || cy >= size) continue;
          // and the mine
          if (matrices[cx][cy].minesAround === -1) continue;

          matrices[cx][cy].minesAround += 1;
        }
      }
    }
  });

  return matrices;
};

function getAPIErrorMessage(error, defaultMessage = "Internal server error") {
  return _.get(error, "response.data.msg", defaultMessage);
}

export function* setupGame({ payload: { size, mines } }) {
  try {
    // const response = yield call(MiniMineSweeperService.fetchMines, {
    //   size,
    //   mines
    // });
    // const { data: minesList } = response.data;
    const minesList = [
      { x: 1, y: 1 },
      { x: 6, y: 3 },
      { x: 2, y: 7 },
      { x: 1, y: 8 },
      { x: 8, y: 8 },
      { x: 5, y: 2 },
      { x: 6, y: 2 },
      { x: 4, y: 1 },
      { x: 3, y: 3 },
      { x: 2, y: 6 }
    ];
    const matrices = generateMatrices(size, minesList);
    yield put(MiniMineSweeperActions.setupSuccess(matrices));
  } catch (error) {
    yield put(MiniMineSweeperActions.setupFailed(getAPIErrorMessage(error)));
  }
}

function exploreNeighbor() {}

function openCell({ payload: { cell } }) {
  if (cell.isOpen) {
    return;
  }
  if (cell.minesAround === -1) {
    return;
  }

  if (cell.minesAround === 0) {
    // explore neighbor
    exploreNeighbor(cell);
  }
}

export default function*() {
  yield takeLeading(MiniMineSweeperTypes.SETUP_GAME, setupGame);
  yield takeEvery(MiniMineSweeperTypes.OPEN_CELL, openCell);
}
