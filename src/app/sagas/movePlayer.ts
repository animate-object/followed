import { takeEvery, select, put } from "redux-saga/effects";
import { ActionTypes, MovePlayer, requestStep } from "../actions";
import { Player } from "../types/entities";
import { getPlayer, getIsProcessingStep } from "../selectors";
import { Step, Instruction } from "../types";

export function* movePlayer() {
  yield takeEvery(ActionTypes.MOVE_PLAYER, function*(action: MovePlayer) {
    const player = (yield select(getPlayer)) as Player.Player;
    const isProcessing = (yield select(getIsProcessingStep)) as boolean;

    if (!isProcessing && !!player) {
      yield put(
        requestStep(
          Step.create(
            action.direction
              ? Instruction.move(player.id, action.direction)
              : Instruction.wait(player.id)
          )
        )
      );
    }
  });
}
