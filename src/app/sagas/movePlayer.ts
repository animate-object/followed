import { takeEvery, select, put } from "redux-saga/effects";
import { ActionTypes, MovePlayer, requestStep } from "../actions";
import { Player } from "../types/entities";
import { getPlayer, getIsProcessingStep } from "../selectors";
import { Step, Instruction } from "../types";

export function* movePlayer() {
  yield takeEvery(ActionTypes.MOVE_PLAYER, function*(action: MovePlayer) {
    const player: Player.Player = yield select(getPlayer);
    const isProcessing: boolean = yield select(getIsProcessingStep);

    if (!isProcessing && !!player) {
      yield put(
        requestStep(
          Step.create(Instruction.Move.create(player.id, action.direction))
        )
      );
    }
  });
}
