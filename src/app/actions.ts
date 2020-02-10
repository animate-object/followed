import { MazeData, Maze, Step, ID, Direction } from "./types";
import { Entity } from "./types/entities";
import { GameData } from "./types/game";

export enum ActionTypes {
  REQUEST_NEW_GAME = "REQUEST_NEW_GAME",
  START_NEW_GAME = "START_NEW_GAME",

  REQUEST_STEP = "REQUEST_STEP",
  COMPLETE_STEP = "COMPLETE_STEP",
  ABORT_STEP = "ABORT_STEP",

  MOVE_PLAYER = "MOVE_PLAYER"
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

export interface RequestStep {
  type: ActionTypes.REQUEST_STEP;
  step: Step.Step;
}

export interface AbortStep {
  type: ActionTypes.ABORT_STEP;
  stepId: ID.ID;
}

export interface CompleteStep {
  type: ActionTypes.COMPLETE_STEP;
  stepId: ID.ID;
  gameData: GameData.GameData;
}

export interface MovePlayer {
  type: ActionTypes.MOVE_PLAYER;
  direction: Direction.Direction;
}

export type AppAction =
  | RequestNewGame
  | StartNewGame
  | RequestStep
  | AbortStep
  | CompleteStep
  | MovePlayer;

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

export const requestStep = (step: Step.Step): RequestStep => ({
  type: ActionTypes.REQUEST_STEP,
  step
});

export const abortStep = (stepId: ID.ID): AbortStep => ({
  type: ActionTypes.ABORT_STEP,
  stepId
});

export const completeStep = (
  stepId: ID.ID,
  gameData: GameData.GameData
): CompleteStep => ({
  type: ActionTypes.COMPLETE_STEP,
  stepId,
  gameData
});

export const movePlayer = (direction: Direction.Direction): MovePlayer => ({
  type: ActionTypes.MOVE_PLAYER,
  direction
});
