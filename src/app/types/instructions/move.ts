import { Direction, ID, Result, Maze, Point } from "..";
import { GameData, EntityData } from "../game";
import { BaseInstruction, InstructionType } from "./baseInstruction";
import { Player } from "../entities";

export interface MoveInstruction extends BaseInstruction {
  type: InstructionType.MOVE;
  payload: {
    direction: Direction.Direction;
  };
}

export const move = (
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
): GameData.GameData => {
  const entityData = EntityData.moveEntity(
    move.entityId,
    gameData.entityData,
    Point.neighbor(
      gameData.entityData.entityMap[move.entityId].position,
      move.payload.direction
    ),
    gameData.maze.dimension
  );

  const player = EntityData.getPlayer(entityData);
  const { seen, sees } =
    player && move.entityId === player.id
      ? updatePlayerVision(gameData.seen, player, gameData.maze)
      : gameData;

  return {
    ...gameData,
    seen,
    sees,
    entityData
  };
};

export const updatePlayerVision = (
  prev: Set<number>,
  player: Player.Player,
  maze: Maze.Maze
): Pick<GameData.GameData, "seen" | "sees"> => {
  const sees = new Set<number>(
    Maze.seenFromPoint(maze, player.position, player.visionRadius).map(p =>
      Point.toIndex(p, maze.dimension)
    )
  );

  const seen = new Set<number>([...prev, ...sees]);

  return { sees, seen };
};
