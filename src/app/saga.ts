import { spawn, all, put } from "redux-saga/effects";
import { Dimension } from "./types";
import { requestNewGame } from "./actions";
import { stepEngine } from "./sagas/stepEngine";
import { movePlayer } from "./sagas/movePlayer";
import { newGame } from "./sagas/newGame";

const sagas = [newGame, stepEngine, movePlayer];

export function* root() {
  yield all(sagas.map(s => spawn(s)));
  yield put(
    requestNewGame({
      mazeOptions: {
        dimension: Dimension.create(15, 15),
        algorithm: "aldous-broder"
      }
    })
  );
}
