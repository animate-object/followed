import { State } from "./state";
import { createSelector } from "reselect";

export const getState = (state: State): State => state;

export const getGame = createSelector(getState, state => state.game);
