import * as State from "./state";
import { AppAction, ActionTypes } from "./actions";

export const reducer = (
  state: State.State = State.create(),
  action: AppAction
): State.State => {
  switch (action.type) {
    case ActionTypes.START_NEW_GAME:
      return State.newGame(state, action.maze);
    case ActionTypes.REQUEST_NEW_GAME:
    default:
      return state;
  }
};
