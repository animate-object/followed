import { call, spawn, all, take, put } from "redux-saga/effects";
import { Api } from "./util";
import { Maze, Dimension } from "./types";
import {
  ActionTypes,
  RequestNewGame,
  startNewGame,
  requestNewGame
} from "./actions";
import { Player } from "./types/entities";
import { stepEngine } from "./sagas/stepEngine";
import { movePlayer } from "./sagas/movePlayer";

function* handleNewGame() {
  while (true) {
    try {
      const { options }: RequestNewGame = yield take(
        ActionTypes.REQUEST_NEW_GAME
      );
      const data = yield call(Api.maze, options.mazeOptions || {});
      yield put(startNewGame(Maze.fromMazeData(data), [Player.create("Test")]));
    } catch (e) {
      console.warn("Error initializing new game");
      console.error(e);
    }
  }
}

const sagas = [handleNewGame, stepEngine, movePlayer];

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
