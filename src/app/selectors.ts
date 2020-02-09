import { State } from "./state";
import { createSelector } from "reselect";
import { Loadable } from "./types";
import { GameData } from "./types/game";

export const getState = (state: State): State => state;

export const getGame = createSelector(getState, state => state.game);

export const getDisplayGrid = createSelector(getGame, game => {
  const val = Loadable.map(GameData.displayGrid, game);
  console.log(val);
  return val;
});
