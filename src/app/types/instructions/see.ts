import { BaseInstruction, InstructionType } from "./baseInstruction";
import { GameData } from "../game";

export interface SeeInstruction extends BaseInstruction {
  type: InstructionType.SEE;
  payload: number[];
}

export const see = (indices: number[]): SeeInstruction => ({
  type: InstructionType.SEE,
  payload: indices
});

export const apply = (
  see: SeeInstruction,
  gameData: GameData.GameData
): GameData.GameData => ({
  ...gameData,
  seen: new Set([...gameData.seen, ...see.payload])
});
