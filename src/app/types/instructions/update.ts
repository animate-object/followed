import { BaseInstruction, InstructionType } from "./baseInstruction";
import { Entity } from "../entities";
import { GameData, EntityData } from "../game";

export interface UpdateInstruction extends BaseInstruction {
  type: InstructionType.UPDATE;
  payload: {
    updated: Entity.Entity;
  };
}

export const create = (updated: Entity.Entity): UpdateInstruction => ({
  type: InstructionType.UPDATE,
  entityId: updated.id,
  payload: { updated }
});

export const apply = (
  update: UpdateInstruction,
  gameData: GameData.GameData
): GameData.GameData => ({
  ...gameData,
  entityData: EntityData.updateEntity(
    update.payload.updated,
    gameData.entityData
  )
});
