import { call } from "redux-saga/effects";

export function* root() {
  yield call(console.log, "Testing 1, 2.");
}
