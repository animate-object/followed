import { BaseInstruction, InstructionType } from "./baseInstruction";
import { Entity } from "../entities";
import { GameData, EntityData } from "../game";

export interface AddInstruction extends BaseInstruction {
  type: InstructionType.ADD;
  payload: {
    entities: Entity.Entity[];
  };
}

export const add = (...entities: Entity.Entity[]): AddInstruction => ({
  type: InstructionType.ADD,
  payload: {
    entities
  }
});

export const apply = (
  add: AddInstruction,
  gameData: GameData.GameData
): GameData.GameData => {
  return {
    ...gameData,
    entityData: add.payload.entities.reduce(
      (data, e) => EntityData.addEntity(data, gameData.maze.dimension, e),
      gameData.entityData
    )
  };
};
