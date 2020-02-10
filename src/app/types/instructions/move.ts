import { Direction, ID, Result, Maze, Point } from "..";
import { GameData, EntityData } from "../game";
import { BaseInstruction, InstructionType } from "./baseInstruction";

export interface MoveInstruction extends BaseInstruction {
  type: InstructionType.MOVE;
  payload: {
    direction: Direction.Direction;
  };
}

export const create = (
  entityId: ID.ID,
  direction: Direction.Direction
): MoveInstruction => ({
  type: InstructionType.MOVE,
  entityId,
  payload: { direction }
});

export const validate = (
  move: MoveInstruction,
  gameData: GameData.GameData
): Result.Result<void> =>
  Maze.canWalk(
    gameData.maze,
    gameData.entityData.entityMap[move.entityId].position,
    move.payload.direction
  )
    ? Result.ok(undefined)
    : Result.err("way is blocked");

export const apply = (
  move: MoveInstruction,
  gameData: GameData.GameData
): GameData.GameData => ({
  ...gameData,
  entityData: EntityData.moveEntity(
    move.entityId,
    gameData.entityData,
    Point.neighbor(
      gameData.entityData.entityMap[move.entityId].position,
      move.payload.direction
    ),
    gameData.maze.dimension
  )
});
