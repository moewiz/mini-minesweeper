import { call, put } from "redux-saga/effects";
import { setupGame, generateMatrices } from "./miniMineSweeperSaga";
import { BEGINNER } from "../../constants/game";
import MiniMineSweeperService from "./miniMineSweeperService";
import { MiniMineSweeperActions } from "../../reducers/miniMineSweeper/miniMineSweeperActions";

describe("test setupGame", () => {
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
  const response = {
    data: {
      data: minesList
    }
  };
  const matrices = generateMatrices(BEGINNER.size, minesList);
  const gen = setupGame({ payload: BEGINNER });

  it("should call api fetch mines", () => {
    expect(gen.next().value).toEqual(
      call(MiniMineSweeperService.fetchMines, BEGINNER)
    );
  });

  it("should put the matrices", () => {
    expect(gen.next(response).value).toEqual(
      put(MiniMineSweeperActions.setupSuccess(matrices))
    );
  });

  it("should finished", () => {
    expect(gen.next().done).toBe(true);
  });
});
