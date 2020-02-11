import { RequestStep, abortStep, completeStep, ActionTypes } from "../actions";
import { Loadable, Instruction, Result, Maybe } from "../types";
import { GameData, EntityData } from "../types/game";
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

        const applied: Result.Result<GameData.GameData> = yield call(
          Instruction.applyAll,
          instructions,
          gameData
        );

        if (Result.isErr(applied)) {
          yield put(abortStep(step.id));
          continue;
        }

        yield put(completeStep(step.id, applied.data));

        // player collisions POC:
        yield call(processCollisions, gameData, applied.data);
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
    return;
  } else if (hostile) {
    yield call(window.confirm, Entity.getKillMessage(player, hostile));
    window.location.reload();
  } else if (collisions.find(e => e.type === "exit")) {
    yield call(window.confirm, `${player.name} escaped. . . this time.`);
    window.location.reload();
  }
}
