import { Maze } from "./types";
import { Loadable } from "./types";

export interface GameData {
  maze: Maze.Maze;
}

export interface State {
  game: Loadable.Loadable<GameData>;
}

export const create = (init = {}): State => ({
  game: Loadable.loading(),
  ...init
});

export const requestingNewGame = (state: State): State => ({
  ...state,
  game: Loadable.loading()
});

export const newGame = (state: State, maze: Maze.Maze): State => ({
  ...state,
  game: Loadable.loaded({ maze })
});
