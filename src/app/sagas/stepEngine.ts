import {
  RequestStep,
  abortStep,
  completeStep,
  ActionTypes,
  processStep
} from "../actions";
import { Loadable, Instruction, Result, Outcome, Phenomenon } from "../types";
import { GameData, EntityData, GameState } from "../types/game";
import { select, put, take, call } from "redux-saga/effects";
import { getGame } from "../selectors";
import { Entity } from "../types/entities";

export function* stepEngine() {
  let activePhenomena: Phenomenon.Phenomenon[] = [];
  while (true) {
    try {
      const { step }: RequestStep = yield take(ActionTypes.REQUEST_STEP);

      const game: Loadable.Loadable<GameData.GameData> = yield select(getGame);

      if (Loadable.isLoaded(game)) {
        const { data: gameData } = game;

        const stepValidation: Result.Result<void> = yield call(
          Instruction.validateAll,
          step.instructions,
          gameData
        );

        if (Result.isErr(stepValidation)) {
          yield put(abortStep(step.id));
          continue;
        }

        const aiInstructions = GameData.generateAllAIInstructions(gameData);
        const instructions = [...aiInstructions, ...step.instructions];

        const afterMovement: Result.Result<GameData.GameData> = yield call(
          Instruction.applyAll,
          instructions,
          gameData
        );

        if (Result.isErr(afterMovement)) {
          yield put(abortStep(step.id));
          continue;
        }

        const collisionOutcomes: Outcome.Outcome[] = yield call(
          processCollisions,
          gameData,
          afterMovement.data
        );

        const afterCollisions: Result.Result<GameData.GameData> = yield call(
          Instruction.applyAll,
          collisionOutcomes.reduce(
            (i: Instruction.Instruction[], o) => [...i, ...o.instructions],
            []
          ),
          afterMovement.data
        );

        if (Result.isErr(afterCollisions)) {
          yield put(abortStep(step.id));
          continue;
        }

        activePhenomena = activePhenomena.concat(
          Outcome.phenomena(collisionOutcomes)
        );

        const phenomenalInstructions = yield call(
          applyPhenomena,
          activePhenomena,
          gameData
        );

        const afterPhenomena: Result.Result<GameData.GameData> = yield call(
          Instruction.applyAll,
          phenomenalInstructions,
          afterCollisions.data
        );

        if (Result.isErr(afterPhenomena)) {
          yield put(abortStep(step.id));
          continue;
        }
        activePhenomena = yield call(prunePhenomena, activePhenomena);

        yield put(processStep(step.id, afterPhenomena.data));
        yield call(checkGameState, afterPhenomena.data);
        yield put(completeStep(step.id));
      }
    } catch (e) {
      console.warn("Error processing step");
      console.error(e);
    }
  }
}

export const processCollisions = (
  last: GameData.GameData,
  next: GameData.GameData
) => {
  const player = EntityData.getPlayer(next.entityData)!;
  const collisions = EntityData.entitiesAtPoint(
    next.entityData,
    player.position,
    next.maze.dimension
  )
    .filter(e => e.id !== player.id)
    .concat(
      EntityData.neighborsCrossedByEntity(
        last.entityData,
        next.entityData,
        player.id,
        next.maze.dimension
      )
    );

  return collisions.map(e => Entity.onCollideWithPlayer(e, next));
};

export function* applyPhenomena(
  activePhenomena: Phenomenon.Phenomenon[],
  gameData: GameData.GameData
) {
  let instructions: Instruction.Instruction[] = [];
  for (const p of activePhenomena) {
    const generatedInstructions = yield call(p.fn, gameData);
    instructions = instructions.concat(generatedInstructions);
  }
  return instructions;
}

export function* checkGameState({ state, entityData }: GameData.GameData) {
  const player = EntityData.getPlayer(entityData);
  if (GameState.lost(state)) {
    yield call(
      window.confirm,
      Entity.getKillMessage(
        EntityData.getPlayer(entityData),
        EntityData.byId(entityData, state.causeOfDeath.entityId)
      )
    );
    window.location.reload();
  } else if (GameState.won(state)) {
    yield call(window.confirm, `${player.name} escaped. . . this time.`);
    window.location.reload();
  }
}

export const prunePhenomena = (
  activePhenomena: Phenomenon.Phenomenon[]
): Phenomenon.Phenomenon[] => {
  return activePhenomena
    .map(p => ({
      ...p,
      duration: p.duration !== "FOREVER" ? p.duration - 1 : p.duration
    }))
    .filter(a => a.duration === "FOREVER" || a.duration > 0);
};
