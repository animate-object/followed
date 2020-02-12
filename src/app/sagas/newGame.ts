import {
  RequestNewGame,
  ActionTypes,
  startNewGame,
  requestNewGame
} from "../actions";
import { Maze, Dimension, MazeData, Maybe } from "../types";
import { call, take, put } from "redux-saga/effects";
import { Api, Numbers, Arrays } from "../util";
import {
  Player,
  BlindGuardian,
  Entity,
  Exit,
  WanderingHusk
} from "../types/entities";

const name = Maybe.withDefault(Maybe.of(localStorage.getItem("name")), () => {
  let n = window.prompt("What is your name?") || "";
  if (n !== "") {
    localStorage.setItem("name", n);
  }
  return n !== "" ? n : "?";
});

export function* firstGame() {
  yield put(
    requestNewGame({
      mazeOptions: {
        dimension: Arrays.randomItem([
          Dimension.create(10, 10),
          Dimension.create(15, 15),
          Dimension.create(15, 15),
          Dimension.create(15, 15),
          Dimension.create(15, 15),
          Dimension.create(20, 20),
          Dimension.create(25, 15),
          Dimension.create(15, 20),
          Dimension.create(30, 5)
        ]),
        algorithm: Arrays.randomItem([
          "aldous-broder",
          "aldous-broder",
          "aldous-broder",
          "binary-tree",
          "side-winder"
        ])
      }
    })
  );
}

export function* newGame() {
  while (true) {
    try {
      const { options }: RequestNewGame = yield take(
        ActionTypes.REQUEST_NEW_GAME
      );
      const data: MazeData.MazeData = yield call(
        Api.maze,
        options.mazeOptions || {}
      );
      const maze: Maze.Maze = Maze.fromMazeData(data);

      yield put(startNewGame(maze, startingEntities(maze)));
    } catch (e) {
      console.warn("Error initializing new game");
      console.error(e);
    }
  }
}

export const startingEntities = ({ dimension }: Maze.Maze): Entity.Entity[] => {
  const player = Player.create(name, Dimension.pointAlongEdge(dimension));
  const exit = Exit.create(Dimension.randomPoint(dimension));
  const guardians = new Array(Numbers.randomInRange(1, 5))
    .fill(undefined)
    .map(_ => BlindGuardian.create(Dimension.randomPoint(dimension)));
  const husks = new Array(Arrays.randomItem([1, 1, 2, 2, 3]))
    .fill(undefined)
    .map(_ => WanderingHusk.create(Dimension.randomPoint(dimension)));

  const enemies = [...guardians, ...husks];
  return [player, exit, ...enemies];
};
