import { MazeData, Maze } from "./types";
import { Entity } from "./types/entities";

export enum ActionTypes {
  REQUEST_NEW_GAME = "REQUEST_NEW_GAME",
  START_NEW_GAME = "START_NEW_GAME"
}

interface NewGameOptions {
  mazeOptions?: MazeData.Options;
}
export interface RequestNewGame {
  type: ActionTypes.REQUEST_NEW_GAME;
  options: NewGameOptions;
}

export interface StartNewGame {
  type: ActionTypes.START_NEW_GAME;
  maze: Maze.Maze;
  entities: Entity.Entity[];
}

export type AppAction = RequestNewGame | StartNewGame;

export const requestNewGame = (
  options: NewGameOptions = {}
): RequestNewGame => ({ type: ActionTypes.REQUEST_NEW_GAME, options });

export const startNewGame = (
  maze: Maze.Maze,
  entities: Entity.Entity[]
): StartNewGame => ({
  type: ActionTypes.START_NEW_GAME,
  maze,
  entities
});
