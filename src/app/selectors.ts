import { State } from "./state";
import { createSelector } from "reselect";
import { Loadable, Maybe } from "./types";
import { GameData } from "./types/game";

export const getState = (state: State): State => state;

export const getGame = createSelector(getState, state => state.game);

export const getDisplayGrid = createSelector(getGame, game =>
  Loadable.map(GameData.displayGrid, game)
);

export const getIsProcessingStep = createSelector(
  getState,
  state => state.stepId != null
);

export const getPlayer = createSelector(getGame, game =>
  Loadable.isLoaded(game)
    ? Maybe.map(
        id => game.data.entityData.entityMap[id],
        game.data.entityData.playerEntityId
      )
    : undefined
);
