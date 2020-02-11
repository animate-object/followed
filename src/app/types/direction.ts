import { Arrays } from "../util";

export enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST"
}

export const all = (): Direction[] => [
  Direction.NORTH,
  Direction.SOUTH,
  Direction.EAST,
  Direction.WEST
];

export const inverse = (d: Direction): Direction => {
  switch (d) {
    case Direction.NORTH:
      return Direction.SOUTH;
    case Direction.SOUTH:
      return Direction.NORTH;
    case Direction.EAST:
      return Direction.WEST;
    case Direction.WEST:
      return Direction.EAST;
  }
};

export const random = (): Direction => Arrays.randomItem(all());
