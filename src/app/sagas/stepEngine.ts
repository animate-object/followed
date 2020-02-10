import { RequestStep, abortStep, completeStep, ActionTypes } from "../actions";
import { Loadable, Instruction, Result } from "../types";
import { GameData } from "../types/game";
import { select, put, take, call } from "redux-saga/effects";
import { getGame } from "../selectors";

export function* stepEngine() {
  while (true) {
    try {
      const { step }: RequestStep = yield take(ActionTypes.REQUEST_STEP);
      const game: Loadable.Loadable<GameData.GameData> = yield select(getGame);
      if (Loadable.isLoaded(game)) {
        const { data: gameData } = game;

        const stepValidation = yield call(
          Instruction.validateAll,
          step.instructions,
          gameData
        );

        if (Result.isErr(stepValidation)) {
          console.log(stepValidation);
          yield put(abortStep(step.id));
          continue;
        }

        const aiInstructions = GameData.generateAllAIInstructions(gameData);
        console.log(aiInstructions);
        const instructions = [...aiInstructions, ...step.instructions];

        const applied = yield call(
          Instruction.applyAll,
          instructions,
          gameData
        );

        if (Result.isErr(applied)) {
          yield put(abortStep(step.id));
          continue;
        }

        yield put(completeStep(step.id, applied.data));
      }
    } catch (e) {
      console.warn("Error processing step");
      console.error(e);
    }
  }
}
