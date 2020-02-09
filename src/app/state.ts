import { Maze } from "./types";
import { Loadable } from "./types";
import { GameData, EntityData } from "./types/game";
import { Entity } from "./types/entities";

export interface State {
  game: Loadable.Loadable<GameData.GameData>;
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
