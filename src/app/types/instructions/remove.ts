import { BaseInstruction, InstructionType } from "./baseInstruction";
import { ID } from "..";
import { GameData, EntityData } from "../game";

export interface RemoveInstruction extends BaseInstruction {
  type: InstructionType.REMOVE;
  payload: ID.ID;
}

export const remove = (id: ID.ID): RemoveInstruction => ({
  type: InstructionType.REMOVE,
  payload: id
});

export const apply = (
  remove: RemoveInstruction,
  gameData: GameData.GameData
): GameData.GameData => ({
  ...gameData,
  entityData: EntityData.removeEntity(
    remove.payload,
    gameData.entityData,
    gameData.maze.dimension
  )
});
