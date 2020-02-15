import { all } from "redux-saga/effects";
import miniMineSweeper from "./miniMineSweeper";

export default function* rootSaga() {
  yield all([miniMineSweeper()]);
}
