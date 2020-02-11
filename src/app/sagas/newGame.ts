import { RequestNewGame, ActionTypes, startNewGame } from "../actions";
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
  console.log(enemies);
  return [player, exit, ...enemies];
};
