import { RequestNewGame, ActionTypes, startNewGame } from "../actions";
import { Maze, Dimension, MazeData } from "../types";
import { call, take, put } from "redux-saga/effects";
import { Api, Arrays, Numbers } from "../util";
import { Player, BlindGuardian, Entity } from "../types/entities";

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

export const startingEntities = (maze: Maze.Maze): Entity.Entity[] => {
  const player = Player.create(
    "Test",
    Dimension.pointAlongEdge(maze.dimension)
  );

  const guardians = new Array(Numbers.randomInRange(1, 5))
    .fill(undefined)
    .map(_ => BlindGuardian.create(Dimension.randomPoint(maze.dimension)));
  console.log(player);

  return [player, ...guardians];
};
