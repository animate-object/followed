import { Maze, ID } from "./types";
import { Loadable } from "./types";
import { GameData, EntityData } from "./types/game";
import { Entity } from "./types/entities";

export interface State {
  game: Loadable.Loadable<GameData.GameData>;
  stepId?: ID.ID;
}

export const create = (init = {}): State => ({
  game: Loadable.loading(),
  ...init
});

export const requestingNewGame = (state: State): State => ({
  ...state,
  game: Loadable.loading()
});

export const newGame = (
  state: State,
  maze: Maze.Maze,
  entities: Entity.Entity[]
): State => ({
  ...state,
  game: Loadable.loaded(
    GameData.create(maze, EntityData.fromEntities(entities, maze.dimension))
  )
});

export const ifGameIsLoaded = (f: () => State, state: State): State =>
  Loadable.isLoaded(state.game) ? f() : state;

export const requestStep = (state: State, stepId: ID.ID): State => ({
  ...state,
  stepId
});

export const completeStep = (
  state: State,
  stepId: ID.ID,
  gameData: GameData.GameData
): State =>
  ifGameIsLoaded(
    () =>
      state.stepId === stepId
        ? {
            ...state,
            stepId: undefined,
            game: Loadable.loaded(gameData)
          }
        : state,
    state
  );

export const abortSTep = (state: State, stepId: ID.ID) =>
  state.stepId === stepId ? { ...state, stepId: undefined } : state;
