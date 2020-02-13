import {
  RequestStep,
  abortStep,
  completeStep,
  ActionTypes,
  processStep
} from "../actions";
import { Loadable, Instruction, Result, Maybe } from "../types";
import { GameData, EntityData, GameState } from "../types/game";
import { select, put, take, call } from "redux-saga/effects";
import { getGame } from "../selectors";
import { EntityClass } from "../types/entities/baseEntity";
import { Entity } from "../types/entities";
import { HostileEntity } from "../types/entities/entity";

export function* stepEngine() {
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

        // player collisions POC:
        const collisionInstructions: Instruction.Instruction[] = yield call(
          processCollisions,
          gameData,
          afterMovement.data
        );

        const afterCollisions: Result.Result<GameData.GameData> = yield call(
          Instruction.applyAll,
          collisionInstructions,
          afterMovement.data
        );

        if (Result.isErr(afterCollisions)) {
          yield put(abortStep(step.id));
          continue;
        }

        yield put(processStep(step.id, afterCollisions.data));
        yield call(checkGameState, afterCollisions.data);
        yield put(completeStep(step.id));
      }
    } catch (e) {
      console.warn("Error processing step");
      console.error(e);
    }
  }
}

export function* processCollisions(
  last: GameData.GameData,
  next: GameData.GameData
) {
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

  const hostile: Maybe.Maybe<HostileEntity> = collisions.find(
    e => e.cls === EntityClass.HOSTILE
  ) as Maybe.Maybe<HostileEntity>;
  if (collisions.length === 0) {
    return [];
  } else if (hostile) {
    return [
      Instruction.updateGameState(GameState.lose({ entityId: hostile.id }))
    ];
  } else if (collisions.find(e => e.type === "exit")) {
    return [Instruction.updateGameState(GameState.win())];
  }
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
