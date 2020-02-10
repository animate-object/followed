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
