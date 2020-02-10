import { Result, Instruction } from "..";
import { Move, Update } from ".";
import { GameData } from "../game";
import { MoveInstruction } from "./move";
import { InstructionType } from "./baseInstruction";
import { UpdateInstruction } from "./update";

export type Instruction = MoveInstruction | UpdateInstruction;

export const validate = (
  instruction: Instruction,
  gameData: GameData.GameData
): Result.Result<void> => {
  switch (instruction.type) {
    case InstructionType.MOVE:
      return Move.validate(instruction, gameData);
    default:
      return Result.err(`Unkown instruction of type ${instruction.type}`);
  }
};

export const validateAll = (
  instructions: Instruction[],
  gameData: GameData.GameData
): Result.Result<void> =>
  instructions.reduce(
    (validated: Result.Result<void>, i) =>
      Result.isOk(validated) ? validate(i, gameData) : validated,
    Result.ok(undefined)
  );

export const apply = (
  instruction: Instruction,
  gameData: GameData.GameData
): Result.Result<GameData.GameData> => {
  try {
    switch (instruction.type) {
      case InstructionType.MOVE:
        return Result.ok(Move.apply(instruction, gameData));
      case InstructionType.UPDATE:
        return Result.ok(Update.apply(instruction, gameData));
    }
  } catch (e) {
    console.warn("Error applying instruction", instruction);
    console.error(e);
    return Result.err("Error applying instructions");
  }
};

export const applyAll = (
  instructions: Instruction[],
  gameData: GameData.GameData
): Result.Result<GameData.GameData> =>
  instructions.reduce(
    (applied: Result.Result<GameData.GameData>, i) =>
      Result.isOk(applied) ? apply(i, applied.data) : applied,
    Result.ok(gameData)
  );
