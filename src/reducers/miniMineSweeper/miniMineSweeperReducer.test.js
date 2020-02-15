import reducer, { INITIAL_STATE } from "./miniMineSweeperReducer";
import { MiniMineSweeperActions } from "./miniMineSweeperActions";
import { GAME_STATUS, BEGINNER } from "../../constants/game";
import dayjs from "dayjs";

describe("miniMineSweeper Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle MiniMineSweeper/NEW_GAME", () => {
    expect(reducer(undefined, MiniMineSweeperActions.newGame())).toEqual(
      INITIAL_STATE
    );
  });

  it("should handle MiniMineSweeper/SETUP_GAME", () => {
    const newState = {
      ...INITIAL_STATE,
      gameStatus: GAME_STATUS.NOT_START,
      loading: true,
      error: null,
      startTime: 0,
      unOpenedCells: BEGINNER.size * BEGINNER.size,
      mines: BEGINNER.mines
    };
    expect(
      reducer(INITIAL_STATE, MiniMineSweeperActions.setupBeginnerGame())
    ).toEqual(newState);
  });

  it("should handle MiniMineSweeper/SETUP_GAME_SUCCES", () => {
    const matrices = [
      [
        { x: 0, y: 0, minesAround: 0, isOpen: false },
        { x: 0, y: 1, minesAround: -1, isOpen: false },
        { x: 0, y: 2, minesAround: 0, isOpen: false }
      ],
      [
        { x: 1, y: 0, minesAround: 0, isOpen: false },
        { x: 1, y: 1, minesAround: 0, isOpen: false },
        { x: 1, y: 2, minesAround: 0, isOpen: false }
      ],
      [
        { x: 2, y: 0, minesAround: 0, isOpen: false },
        { x: 2, y: 1, minesAround: 0, isOpen: false },
        { x: 2, y: 2, minesAround: 0, isOpen: false }
      ]
    ];
    const newState = {
      ...INITIAL_STATE,
      matrices,
      loading: false,
      error: null
    };
    expect(
      reducer(INITIAL_STATE, MiniMineSweeperActions.setupSuccess(matrices))
    ).toEqual(newState);
  });

  it("should handle MiniMineSweeper/SETUP_GAME_FAILED", () => {
    const error = "Size or mines is wrong";
    const newState = {
      ...INITIAL_STATE,
      loading: false,
      error
    };
    expect(
      reducer(INITIAL_STATE, MiniMineSweeperActions.setupFailed(error))
    ).toEqual(newState);
  });

  it("should handle MiniMineSweeper/OPEN_CELL", () => {
    const matrices = [
      [
        { x: 0, y: 0, minesAround: 0, isOpen: false },
        { x: 0, y: 1, minesAround: -1, isOpen: false },
        { x: 0, y: 2, minesAround: 0, isOpen: false }
      ],
      [
        { x: 1, y: 0, minesAround: 0, isOpen: false },
        { x: 1, y: 1, minesAround: 0, isOpen: false },
        { x: 1, y: 2, minesAround: 0, isOpen: false }
      ],
      [
        { x: 2, y: 0, minesAround: 0, isOpen: false },
        { x: 2, y: 1, minesAround: 0, isOpen: false },
        { x: 2, y: 2, minesAround: 0, isOpen: false }
      ]
    ];
    const cell = {
      x: 1,
      y: 0,
      minesAround: 0,
      isOpen: false
    };
    const updatedCell = { ...cell, isOpen: true };
    const updatedRow = [...matrices[cell.x]];
    updatedRow[cell.y] = updatedCell;
    const updatedMatrices = [...matrices];
    updatedMatrices[cell.x] = updatedRow;
    const newState = {
      ...INITIAL_STATE,
      matrices: updatedMatrices,
      startTime: dayjs(),
      gameStatus: GAME_STATUS.PLAYING,
      unOpenedCells: 8,
      mines: 1
    };
    expect(
      reducer(
        { ...INITIAL_STATE, matrices, unOpenedCells: 9, mines: 1 },
        MiniMineSweeperActions.openCell(cell)
      )
    ).toEqual(newState);
  });

  it("should handle MiniMineSweeper/OPEN_CELL", () => {
    const matrices = [
      [
        { x: 0, y: 0, minesAround: 0, isOpen: false },
        { x: 0, y: 1, minesAround: -1, isOpen: false },
        { x: 0, y: 2, minesAround: 0, isOpen: false }
      ],
      [
        { x: 1, y: 0, minesAround: 0, isOpen: false },
        { x: 1, y: 1, minesAround: 0, isOpen: false },
        { x: 1, y: 2, minesAround: 0, isOpen: false }
      ],
      [
        { x: 2, y: 0, minesAround: 0, isOpen: false },
        { x: 2, y: 1, minesAround: 0, isOpen: false },
        { x: 2, y: 2, minesAround: 0, isOpen: false }
      ]
    ];
    const newState = {
      ...INITIAL_STATE,
      matrices,
      gameStatus: GAME_STATUS.LOSE
    };
    const cell = {
      x: 0,
      y: 1,
      minesAround: -1,
      isOpen: false
    };
    expect(
      reducer(
        { ...INITIAL_STATE, matrices },
        MiniMineSweeperActions.openCell(cell)
      )
    ).toEqual(newState);
  });
});
