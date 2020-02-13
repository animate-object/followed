import { Direction, ID, Result, Maze, Point } from "..";
import { GameData, EntityData } from "../game";
import { BaseInstruction, InstructionType } from "./baseInstruction";
import { Player } from "../entities";

export interface MoveInstruction extends BaseInstruction {
  type: InstructionType.MOVE;
  payload: {
    direction: Direction.Direction;
    entityId: ID.ID;
  };
}

export const move = (
  entityId: ID.ID,
  direction: Direction.Direction
): MoveInstruction => ({
  type: InstructionType.MOVE,
  payload: { entityId, direction }
});

export const validate = (
  { payload }: MoveInstruction,
  gameData: GameData.GameData
): Result.Result<void> =>
  Maze.canWalk(
    gameData.maze,
    gameData.entityData.entityMap[payload.entityId].position,
    payload.direction
  )
    ? Result.ok(undefined)
    : Result.err("way is blocked");

export const apply = (
  move: MoveInstruction,
  gameData: GameData.GameData
): GameData.GameData => {
  const { entityId, direction } = move.payload;
  const entityData = EntityData.moveEntity(
    entityId,
    gameData.entityData,
    Point.neighbor(gameData.entityData.entityMap[entityId].position, direction),
    gameData.maze.dimension
  );

  const player = EntityData.getPlayer(entityData);
  const { seen, sees } =
    player && entityId === player.id
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
