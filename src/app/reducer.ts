import * as State from "./state";
import { AppAction, ActionTypes } from "./actions";

export const reducer = (
  state: State.State = State.create(),
  action: AppAction
): State.State => {
  switch (action.type) {
    case ActionTypes.REQUEST_STEP:
      return State.requestStep(state, action.step.id);
    case ActionTypes.COMPLETE_STEP:
      return State.completeStep(state, action.stepId);
    case ActionTypes.ABORT_STEP:
      return State.abortStep(state, action.stepId);
    case ActionTypes.PROCESS_STEP:
      return State.processStep(state, action.stepId, action.gameData);
    case ActionTypes.START_NEW_GAME:
      return State.newGame(state, action.maze, action.entities);
    case ActionTypes.REQUEST_NEW_GAME:
      return State.requestingNewGame(state);
    case ActionTypes.ADD_MESSAGE:
      return State.addMessage(state, action.message);
    default:
      return state;
  }
};
