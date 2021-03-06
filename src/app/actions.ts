import { MazeData, Maze, Step, ID, Direction, Message } from "./types";
import { Entity } from "./types/entities";
import { GameData } from "./types/game";

export enum ActionTypes {
  REQUEST_NEW_GAME = "REQUEST_NEW_GAME",
  START_NEW_GAME = "START_NEW_GAME",

  REQUEST_STEP = "REQUEST_STEP",
  PROCESS_STEP = "PROCESS_STEP",
  COMPLETE_STEP = "COMPLETE_STEP",
  ABORT_STEP = "ABORT_STEP",

  MOVE_PLAYER = "MOVE_PLAYER",

  ADD_MESSAGE = "ADD_MESSAGE"
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

export interface ProcessStep {
  type: ActionTypes.PROCESS_STEP;
  stepId: ID.ID;
  gameData: GameData.GameData;
}

export interface CompleteStep {
  type: ActionTypes.COMPLETE_STEP;
  stepId: ID.ID;
}

export interface MovePlayer {
  type: ActionTypes.MOVE_PLAYER;
  direction?: Direction.Direction;
}

export interface AddMessage {
  type: ActionTypes.ADD_MESSAGE;
  message: Message.Message;
}

export type AppAction =
  | RequestNewGame
  | StartNewGame
  | RequestStep
  | AbortStep
  | CompleteStep
  | ProcessStep
  | MovePlayer
  | AddMessage;

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

export const processStep = (
  stepId: ID.ID,
  gameData: GameData.GameData
): ProcessStep => ({
  type: ActionTypes.PROCESS_STEP,
  stepId,
  gameData
});

export const completeStep = (stepId: ID.ID): CompleteStep => ({
  type: ActionTypes.COMPLETE_STEP,
  stepId
});

export const movePlayer = (direction?: Direction.Direction): MovePlayer => ({
  type: ActionTypes.MOVE_PLAYER,
  direction
});

export const addMessage = (message: Message.Message): AddMessage => ({
  type: ActionTypes.ADD_MESSAGE,
  message
});
