import { call, spawn, all, take, put } from "redux-saga/effects";
import { Api } from "./util";
import { Maze, Dimension } from "./types";
import {
  ActionTypes,
  RequestNewGame,
  startNewGame,
  requestNewGame
} from "./actions";

function* handleNewGame() {
  while (true) {
    try {
      const { options }: RequestNewGame = yield take(
        ActionTypes.REQUEST_NEW_GAME
      );
      const data = yield call(Api.maze, options.mazeOptions || {});
      yield put(startNewGame(Maze.fromMazeData(data)));
    } catch (e) {
      console.warn("Error initializing new game");
      console.error(e);
    }
  }
}

const sagas = [handleNewGame];

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
