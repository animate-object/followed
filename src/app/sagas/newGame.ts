import { RequestNewGame, ActionTypes, startNewGame } from "../actions";
import { Maze, Dimension, MazeData } from "../types";
import { call, take, put } from "redux-saga/effects";
import { Api, Numbers } from "../util";
import { Player, BlindGuardian, Entity, Exit } from "../types/entities";

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
  const player = Player.create("Test", Dimension.pointAlongEdge(dimension));
  const exit = Exit.create(Dimension.randomPoint(dimension));
  const guardians = new Array(Numbers.randomInRange(1, 5))
    .fill(undefined)
    .map(_ => BlindGuardian.create(Dimension.randomPoint(dimension)));

  return [player, exit, ...guardians];
};
