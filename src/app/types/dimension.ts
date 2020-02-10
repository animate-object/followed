import { Point } from ".";
import { Numbers } from "../util";

export interface Dimension {
  width: number;
  height: number;
}

export const create = (width: number = 0, height: number = 0): Dimension => ({
  width,
  height
});

export const area = (d: Dimension): number => d.width * d.height;

export const randomPoint = (d: Dimension): Point.Point =>
  Point.fromIndex(Math.floor(Math.random() * area(d)), d);

export const pointAlongEdge = (d: Dimension): Point.Point => {
  const northOrSouth = Math.random() > 0.5;

  return Point.create(
    northOrSouth
      ? Numbers.randomInRange(0, d.width)
      : Math.random() > 0.5
      ? 0
      : d.width - 1,
    !northOrSouth
      ? Numbers.randomInRange(0, d.height)
      : Math.random() > 0.5
      ? 0
      : d.height - 1
  );
};
