import { call } from "redux-saga/effects";
import { Api } from "./util";

export function* root() {
  //   yield call(console.log, "Testing 1, 2.");
  const mazeData = yield call(Api.maze, {});
  yield call(console.log, mazeData);
}
