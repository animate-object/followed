import { Direction } from ".";

export interface Cell {
  walls: Walls;
}

/**
 * A wall is present to direction n if n === true
 */
export interface Walls {
  n: boolean;
  e: boolean;
  s: boolean;
  w: boolean;
}

export const walls = ({ n, e, s, w }: Partial<Walls>): Walls => ({
  n: n || false,
  e: e || false,
  s: s || false,
  w: w || false
});

export const fromByte = (byte: number) => ({
  walls: walls({
    n: !((byte & 0b00001000) > 0),
    s: !((byte & 0b00000100) > 0),
    e: !((byte & 0b00000010) > 0),
    w: !((byte & 0b00000001) > 0)
  })
});

export const hasWall = (
  { walls }: Cell,
  direction: Direction.Direction
): boolean => {
  switch (direction) {
    case Direction.Direction.NORTH:
      return walls.n;
    case Direction.Direction.EAST:
      return walls.e;
    case Direction.Direction.SOUTH:
      return walls.s;
    case Direction.Direction.WEST:
      return walls.w;
  }
};
