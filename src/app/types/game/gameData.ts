import { Maze, Cell, Point, Instruction, Direction } from "..";
import { EntityData, GameData, GameState } from ".";
import { Entity } from "../entities";

export interface GameData {
  maze: Maze.Maze;
  entityData: EntityData.EntityData;
  seen: Set<number>;
  sees: Set<number>;
  stepCount: number;
  state: GameState.GameState;
}

export const create = (
  maze: Maze.Maze,
  entityData: EntityData.EntityData
): GameData => {
  const player = EntityData.getPlayer(entityData);
  const sees = new Set<number>(
    player
      ? Maze.seenFromPoint(maze, player.position, player.visionRadius).map(p =>
          Point.toIndex(p, maze.dimension)
        )
      : []
  );

  return {
    maze,
    entityData,
    seen: new Set(),
    sees,
    stepCount: 0,
    state: GameState.play()
  };
};

export const lookForEntityInDirection = (
  d: Direction.Direction,
  origin: Point.Point,
  gameData: GameData.GameData,
  predicate: (e: Entity.Entity) => boolean,
  siteRadius: number = 5
): boolean =>
  Maze.lookInDirection(gameData.maze, d, origin, siteRadius).reduce(
    (found: boolean, p) =>
      !found
        ? EntityData.entitiesAtPoint(
            gameData.entityData,
            p,
            gameData.maze.dimension
          ).find(predicate) != null
        : found,
    false
  );

export interface CellMeta {
  occupants: Entity.Entity[];
  visible: boolean;
  seen: boolean;
  unknown: boolean;
}

export interface CellAndMeta {
  cell: Cell.Cell;
  meta: CellMeta;
}

export type DisplayGrid = CellAndMeta[][];

export const displayGrid = ({
  maze,
  entityData,
  seen,
  sees
}: GameData): DisplayGrid =>
  maze.grid.reduce(
    (rows: CellAndMeta[][], row, rowIdx) => [
      ...rows,
      row.reduce((cells: CellAndMeta[], cell, cellIdx) => {
        const p = Point.create(cellIdx, rowIdx);
        const isSeen = seen.has(Point.toIndex(p, maze.dimension));
        const isVisible = sees.has(Point.toIndex(p, maze.dimension));
        return cells.concat({
          cell,
          meta: {
            occupants: EntityData.entitiesAtPoint(
              entityData,
              Point.create(cellIdx, rowIdx),
              maze.dimension
            ),
            visible: isVisible,
            seen: isSeen,
            unknown: !isVisible && !isSeen
          }
        });
      }, [])
    ],
    []
  );

export const generateAllAIInstructions = (
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  const aiEntities = Object.keys(gameData.entityData.entityMap)
    .map(k => EntityData.byId(gameData.entityData, k))
    .filter(e => e.type !== "player");

  return aiEntities.reduce(
    (i: Instruction.Instruction[], e) =>
      i.concat(Entity.generateAiInstructions(e, gameData)),
    []
  );
};
