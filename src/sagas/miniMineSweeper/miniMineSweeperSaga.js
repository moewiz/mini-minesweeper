import { takeLeading, takeEvery, call, put, select } from "redux-saga/effects";
import _ from "lodash";
import {
  types as MiniMineSweeperTypes,
  actions as MiniMineSweeperActions,
  selectors as MiniMineSweeperSelectors
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
    const response = yield call(MiniMineSweeperService.fetchMines, {
      size,
      mines
    });
    const { data: minesList } = response.data;
    const matrices = generateMatrices(size, minesList);
    yield put(MiniMineSweeperActions.setupSuccess(matrices));
  } catch (error) {
    yield put(MiniMineSweeperActions.setupFailed(getAPIErrorMessage(error)));
  }
}

/**
 * Non-recursive
 * @param {number} x
 * @param {number} y
 * @param {Array} matrices
 */
function floodFill(x, y, matrices) {
  const neighbors = {};
  const queue = [];
  const size = matrices.length;
  if (x >= 0 && x < size && y >= 0 && y < size) {
    queue.push({ x, y });

    while (queue.length > 0) {
      const current = queue.pop(); // Front queue
      // Check 8 neighbors around the current cell to push into the Queue
      for (let xoff = -1; xoff <= 1; xoff++) {
        for (let yoff = -1; yoff <= 1; yoff++) {
          const cx = current.x + xoff;
          const cy = current.y + yoff;

          // Ignore the cell out of the board
          if (cx < 0 || cx >= size) continue;
          if (cy < 0 || cy >= size) continue;
          // or revealed, visited neightbor
          const nKey = `${cx}x${cy}`;
          if (matrices[cx][cy].isOpen || neighbors[nKey]) continue;

          neighbors[nKey] = { x: cx, y: cy };
          // don't push if encounter a barrier
          if (matrices[cx][cy].minesAround > 0) continue;

          queue.push({ x: cx, y: cy });
        }
      }
    }
  }
  return Object.values(neighbors);
}

function* handleOpenCell({ payload: { cell } }) {
  if (cell.isOpen || cell.minesAround > 0) {
    return;
  }
  const matrices = yield select(MiniMineSweeperSelectors.getMatrices);
  const neighbors = floodFill(cell.x, cell.y, matrices);
  yield put(MiniMineSweeperActions.openNeighbors(neighbors));
}

export default function*() {
  yield takeLeading(MiniMineSweeperTypes.SETUP_GAME, setupGame);
  yield takeEvery(MiniMineSweeperTypes.OPEN_CELL, handleOpenCell);
}
