import { BaseInstruction, InstructionType } from "./baseInstruction";
import { ID } from "..";
import { GameData } from "../game";

export interface WaitInstruction extends BaseInstruction {
  type: InstructionType.WAIT;
  payload: {
    entityId: ID.ID;
  };
}

export const wait = (entityId: ID.ID): WaitInstruction => ({
  type: InstructionType.WAIT,
  payload: {
    entityId
  }
});

export const apply = (
  _: WaitInstruction,
  gameData: GameData.GameData
): GameData.GameData => ({ ...gameData });
