import * as State from "./state";
import { AppAction } from "./actions";

export const reducer = (
  state: State.State = State.create(),
  action: AppAction
): State.State => state;
