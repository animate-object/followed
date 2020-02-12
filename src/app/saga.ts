import { spawn, all } from "redux-saga/effects";
import { stepEngine } from "./sagas/stepEngine";
import { movePlayer } from "./sagas/movePlayer";
import { newGame, firstGame } from "./sagas/newGame";

const sagas = [firstGame, newGame, stepEngine, movePlayer];

export function* root() {
  yield all(sagas.map(s => spawn(s)));
}
