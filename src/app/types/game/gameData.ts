import { Maze, Cell, Point, Instruction } from "..";
import { EntityData, GameData } from ".";
import { Entity } from "../entities";

export interface GameData {
  maze: Maze.Maze;
  entityData: EntityData.EntityData;
}

export const create = (
  maze: Maze.Maze,
  entityData: EntityData.EntityData
): GameData => ({
  maze,
  entityData
});

export interface CellAndOccupants {
  cell: Cell.Cell;
  occupants: Entity.Entity[];
}

export type DisplayGrid = Array<Array<CellAndOccupants>>;

export const displayGrid = ({ maze, entityData }: GameData): DisplayGrid =>
  maze.grid.reduce(
    (rows: CellAndOccupants[][], row, rowIdx) => [
      ...rows,
      row.reduce(
        (cells: CellAndOccupants[], cell, cellIdx) =>
          cells.concat({
            cell,
            occupants: EntityData.entitiesAtPoint(
              entityData,
              Point.create(cellIdx, rowIdx),
              maze.dimension
            )
          }),
        []
      )
    ],
    []
  );

export const generateAllAIInstructions = (
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  const aiEntities = Object.keys(gameData.entityData.entityMap)
    .map(k => gameData.entityData.entityMap[k])
    .filter(e => e.type !== "player");

  return aiEntities.reduce(
    (i: Instruction.Instruction[], e) =>
      i.concat(Entity.generateAiInstructions(e, gameData)),
    []
  );
};
