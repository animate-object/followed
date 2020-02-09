import { Dimension, Point } from ".";

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
