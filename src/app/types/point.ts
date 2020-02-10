import { Dimension, Point, Direction } from ".";

export interface Point {
  x: number;
  y: number;
}

export const create = (x: number = 0, y: number = 0): Point => ({ x, y });

export const toIndex = (
  { x, y }: Point,
  { width }: Dimension.Dimension
): number => y * width + x;

export const fromIndex = (idx: number, { width }: Dimension.Dimension): Point =>
  create(Math.floor(idx / width), idx % width);

export const neighbor = (p: Point, d: Direction.Direction): Point => {
  switch (d) {
    case "NORTH":
      return Point.create(p.x, p.y - 1);
    case "SOUTH":
      return Point.create(p.x, p.y + 1);
    case "EAST":
      return Point.create(p.x + 1, p.y);
    case "WEST":
    default:
      return Point.create(p.x - 1, p.y);
  }
};

export const neighbors = (p: Point, d: Dimension.Dimension): Point[] =>
  Direction.all()
    .map(d => neighbor(p, d))
    .filter(p => p.x >= 0 && p.y >= 0 && p.x < d.width && p.y < d.height);

export const equals = (a: Point.Point, b: Point.Point): boolean =>
  a.x === b.x && a.y === b.y;
