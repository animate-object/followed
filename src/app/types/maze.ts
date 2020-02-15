import * as Cell from "./cell";
import * as MazeData from "./mazeData";
import { Dimension, Point, Direction, Maybe } from ".";
import { Arrays } from "../util";
import { Entity } from "./entities";

export interface Maze {
  readonly grid: Grid;
  readonly dimension: Dimension.Dimension;
  readonly algorithm: string;
  readonly deadends: DeadEnds;
}

export type Grid = Array<Array<Cell.Cell>>;

export const fromMazeData = ({
  dimension,
  bytes,
  algorithm
}: MazeData.MazeData): Maze => {
  const grid: Grid = [];
  const deadends: number[] = [];
  for (let r = 0; r < dimension.height; r++) {
    const row = [];
    for (let c = 0; c < dimension.width; c++) {
      const cell = Cell.fromByte(bytes[r * dimension.width + c]);
      row.push(cell);
      if (Cell.isDeadEnd(cell)) {
        deadends.push(Point.toIndex(Point.create(c, r), dimension));
      }
    }
    grid.push(row);
  }

  return {
    grid,
    dimension,
    algorithm,
    deadends: {
      unused: deadends,
      used: []
    }
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

/**
 * Deadends . . .
 */

interface DeadEnds {
  used: number[];
  unused: number[];
}

export const takeDeadEnd = (maze: Maze): [number, Maze] => {
  const de = Arrays.randomItem(maze.deadends.unused);
  if (de) {
    return [
      de,
      {
        ...maze,
        deadends: {
          unused: maze.deadends.unused.filter(c => c !== de),
          used: [...maze.deadends.used, de]
        }
      }
    ];
  } else {
    return [-1, maze];
  }
};

export const deadEnds = (maze: Maze): number[] => {
  return [...maze.deadends.used, ...maze.deadends.unused];
};

type EntityCreator = (p: Point.Point) => Entity.Entity;
type PlacementAcc = {
  maze: Maze;
  placed: Entity.Entity[];
  unplaced: Entity.Entity[];
};

export const placeEntitiesInDeadEnds = (
  maze: Maze,
  creators: EntityCreator[]
): PlacementAcc => {
  return creators.reduce(
    (acc: PlacementAcc, creator) => {
      const [de, maze] = takeDeadEnd(acc.maze);
      let placed;
      let unplaced;
      if (de) {
        placed = [
          ...acc.placed,
          creator(Point.fromIndex(de, acc.maze.dimension))
        ];
        unplaced = [...acc.unplaced];
      } else {
        placed = [...acc.placed];
        unplaced = [...acc.unplaced, creator(Point.create(-1, -1))];
      }
      return {
        maze,
        placed,
        unplaced
      };
    },
    {
      maze,
      placed: [],
      unplaced: []
    }
  );
};
