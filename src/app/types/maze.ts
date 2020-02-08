import * as Cell from "./cell";
import * as MazeData from "./mazeData";
import { Dimension } from ".";

export interface Maze {
  readonly grid: Grid;
  readonly dimension: Dimension.Dimension;
}

export type Grid = Array<Array<Cell.Cell>>;

export const fromMazeData = ({ dimension, bytes }: MazeData.MazeData): Maze => {
  const grid: Grid = [];
  for (let r = 0; r < dimension.height; r++) {
    const row = [];
    for (let c = 0; c < dimension.width; c++) {
      row.push(Cell.fromByte(bytes[r * dimension.width + c]));
    }
    grid.push(row);
  }

  return {
    grid,
    dimension
  };
};
