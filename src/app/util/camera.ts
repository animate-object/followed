import { DisplayGrid, CellAndMeta } from "../types/game/gameData";
import { Point, Maybe } from "../types";

export type WindowedGrid = Array<Array<Maybe.Maybe<CellAndMeta>>>;

export const centerOnPoint = (
  grid: DisplayGrid,
  point: Point.Point,
  radius: number
): WindowedGrid => {
  const xMin = point.x - radius;
  const xMax = point.x + radius + 1;
  const yMin = point.y - radius;
  const yMax = point.y + radius + 1;

  const windowedGrid: WindowedGrid = [];

  for (let y = yMin; y < yMax; y++) {
    const row = [];
    for (let x = xMin; x < xMax; x++) {
      row.push(Maybe.map(row => row[x], grid[y]));
    }
    windowedGrid.push(row);
  }

  return windowedGrid;
};
