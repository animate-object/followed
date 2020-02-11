import * as Cell from "./cell";
import * as MazeData from "./mazeData";
import { Dimension, Point, Direction, Maybe } from ".";

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

export const canWalk = (
  maze: Maze,
  { x, y }: Point.Point,
  direction: Direction.Direction
): boolean => {
  const cell = maze.grid[y][x];
  return !Cell.hasWall(cell, direction);
};

export const canTravel = (
  maze: Maze,
  p: Point.Point,
  ...directions: Direction.Direction[]
): boolean =>
  !!directions.reduce(
    (last: Maybe.Maybe<Point.Point>, d) =>
      last && canWalk(maze, last, d) ? Point.neighbor(last, d) : undefined,
    p
  );

export const lookInDirection = (
  maze: Maze,
  d: Direction.Direction,
  p: Point.Point,
  visionRadius: number
): Point.Point[] => {
  if (canWalk(maze, p, d) && visionRadius > 0) {
    const neighbor = Point.neighbor(p, d);
    return [neighbor, ...lookInDirection(maze, d, neighbor, visionRadius - 1)];
  } else {
    return [];
  }
};

export const peekableCorners = (maze: Maze, p: Point.Point): Point.Point[] => {
  let corners: Point.Point[] = [];
  if (
    canTravel(maze, p, Direction.Direction.NORTH, Direction.Direction.EAST) ||
    canTravel(maze, p, Direction.Direction.EAST, Direction.Direction.NORTH)
  ) {
    corners.push(Point.create(p.x + 1, p.y - 1));
  }
  if (
    canTravel(maze, p, Direction.Direction.NORTH, Direction.Direction.WEST) ||
    canTravel(maze, p, Direction.Direction.WEST, Direction.Direction.NORTH)
  ) {
    corners.push(Point.create(p.x - 1, p.y - 1));
  }
  if (
    canTravel(maze, p, Direction.Direction.SOUTH, Direction.Direction.EAST) ||
    canTravel(maze, p, Direction.Direction.EAST, Direction.Direction.SOUTH)
  ) {
    corners.push(Point.create(p.x + 1, p.y + 1));
  }
  if (
    canTravel(maze, p, Direction.Direction.SOUTH, Direction.Direction.WEST) ||
    canTravel(maze, p, Direction.Direction.WEST, Direction.Direction.SOUTH)
  ) {
    corners.push(Point.create(p.x - 1, p.y + 1));
  }

  return corners;
};

export const seenFromPoint = (
  maze: Maze,
  origin: Point.Point,
  visionRadius: number
): Point.Point[] =>
  Direction.all()
    .reduce(
      (p: Point.Point[], d) =>
        p.concat(lookInDirection(maze, d, origin, visionRadius)),
      []
    )
    .concat(peekableCorners(maze, origin))
    .concat(origin);
