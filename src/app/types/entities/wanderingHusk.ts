import { BaseEntity } from ".";
import { Point, ID, Direction, Instruction, Maze, Maybe } from "..";
import { GameData, EntityData } from "../game";
import { Arrays } from "../../util";

/**
 * The wandering husk shambles aimlesslessy, until it lays its eyes on prey.
 * It pursues relentlessly that which it can see.
 */

export interface WanderingHusk extends BaseEntity.BaseEntity {
  type: "wandering-husk";
  heading: Direction.Direction;
}

export const create = (
  position: Point.Point = Point.create()
): WanderingHusk => ({
  type: "wandering-husk",
  position,
  id: ID.create(),
  heading: Direction.random(),
  cls: BaseEntity.EntityClass.HOSTILE
});

export const next = (
  e: WanderingHusk,
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  const towardPlayer = Direction.all().reduce(
    (heading: Maybe.Maybe<Direction.Direction>, d) =>
      !heading
        ? lookForPlayerInDirection(d, e.position, gameData)
          ? d
          : undefined
        : heading,
    undefined
  );

  const instructions = [];
  let heading: Direction.Direction;
  if (towardPlayer) {
    if (Math.random() < 0.9) {
      heading = towardPlayer;

      instructions.push(Instruction.move(e.id, heading));
    } else {
      heading = e.heading;
      instructions.push(Instruction.wait(e.id));
    }
  } else {
    heading = wander(e, gameData);

    instructions.push(Instruction.move(e.id, heading));
  }

  return [Instruction.update({ ...e, heading }), ...instructions];
};

export const wander = (
  e: WanderingHusk,
  gameData: GameData.GameData
): Direction.Direction => {
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
  return direction;
};

export const lookForPlayerInDirection = (
  d: Direction.Direction,
  origin: Point.Point,
  gameData: GameData.GameData
): boolean =>
  Maze.lookInDirection(gameData.maze, d, origin, 5).reduce(
    (foundPlayer: boolean, p) =>
      !foundPlayer
        ? EntityData.entitiesAtPoint(
            gameData.entityData,
            p,
            gameData.maze.dimension
          ).find(e => e.type === "player") != null
        : foundPlayer,
    false
  );

export const DISPLAY = "🧟";
