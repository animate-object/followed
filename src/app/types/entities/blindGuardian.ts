import { BaseEntity } from ".";
import { Point, ID, Direction, Instruction, Maze } from "..";
import { GameData } from "../game";
import { Arrays } from "../../util";

/**
 * The blind guardian is a sightless, senseless automaton
 */
export interface BlindGuardian extends BaseEntity.BaseEntity {
  type: "blind-guardian";
  heading: Direction.Direction;
}

export const create = (
  position: Point.Point = Point.create()
): BlindGuardian => ({
  type: "blind-guardian",
  position,
  id: ID.create(),
  heading: Direction.Direction.NORTH
});

export const next = (
  e: BlindGuardian,
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  const options = Direction.all().filter(d =>
    Maze.canWalk(gameData.maze, e.position, d)
  );

  const adjacent = options.filter(d => d !== Direction.inverse(e.heading));

  let direction: Direction.Direction;

  if (options.includes(e.heading) && Math.random() < 0.75) {
    direction = e.heading;
  } else if (Math.random() < 0.75 && adjacent.length > 0) {
    direction = Arrays.randomItem(adjacent);
  } else {
    direction = options[0];
  }

  return [
    Instruction.update({ ...e, heading: direction }),
    Instruction.move(e.id, direction)
  ];
};

export const DISPLAY = "🗿";
