import { Result, Instruction } from "..";
import * as Move from "./move";
import * as Update from "./update";
import * as Wait from "./wait";
import * as UpdateGameState from "./updateGameState";
import { GameData } from "../game";
import { InstructionType } from "./baseInstruction";

export type Instruction =
  | Move.MoveInstruction
  | Update.UpdateInstruction
  | Wait.WaitInstruction
  | UpdateGameState.UpdateGameStateInstruction;

export const validate = (
  instruction: Instruction,
  gameData: GameData.GameData
): Result.Result<void> => {
  switch (instruction.type) {
    case InstructionType.MOVE:
      return Move.validate(instruction, gameData);
    case InstructionType.WAIT:
      return Result.ok(undefined);
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
      case InstructionType.WAIT:
        return Result.ok(Wait.apply(instruction, gameData));
      case InstructionType.UPDATE_GAME_STATE:
        return Result.ok(UpdateGameState.apply(instruction, gameData));
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
