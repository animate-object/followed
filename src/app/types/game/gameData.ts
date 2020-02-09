import { Maze, Cell, Point } from "..";
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
