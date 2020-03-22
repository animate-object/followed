import { BaseEntity } from "..";
import { GameData, EntityData } from "../../game";
import {
  Instruction,
  Point,
  ID,
  Maze,
  PriorityQueue,
  Maybe,
  Direction,
  Dimension
} from "../..";
import { maze } from "../../../util/api";

/**
 * The seeker is a merciless hunter from another world.
 */
export interface Seeker extends BaseEntity.HostileEntity {
  type: "seeker";
}

export const create = (position: Point.Point = Point.create()): Seeker => ({
  type: "seeker",
  position,
  id: ID.create(),
  cls: BaseEntity.EntityClass.HOSTILE
});

export const prioritize = (p: Point.Point, target: Point.Point): number =>
  Math.round(Point.distance(p, target));

type Frontier = PriorityQueue.Queue<Point.Point>;

export const addAllToFrontier = (
  frontier: Frontier,
  points: Point.Point[],
  target: Point.Point
): Frontier =>
  points.reduce(
    (queue, p) => PriorityQueue.queue(queue, p, prioritize(p, target)),
    frontier
  );

export const next = (
  e: Seeker,
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  const target = EntityData.getPlayer(gameData.entityData).position;
  const start = e.position;
  const dimension = gameData.maze.dimension;

  const cameFrom: Map<number, Maybe.Maybe<Point.Point>> = new Map();
  cameFrom.set(Point.toIndex(start, dimension), undefined);
  let result: Maybe.Maybe<Point.Point> = Maybe.none();
  let frontier: Frontier = addAllToFrontier(
    PriorityQueue.create(),
    [start],
    target
  );

  while (true) {
    const { queue: newFrontier, item: nextPoint } = PriorityQueue.dequeue(
      frontier,
      Math.min,
      Point.equals
    );

    if (!nextPoint) {
      result = Maybe.none();
      break;
    }

    const traversableNeighbors = Maze.traversableNeighbors(
      gameData.maze,
      nextPoint
    ).filter(n => !cameFrom.has(Point.toIndex(n, dimension)));
    traversableNeighbors.forEach(neighbor =>
      cameFrom.set(Point.toIndex(neighbor, dimension), nextPoint)
    );

    const found = traversableNeighbors.filter(n => Point.equals(n, target));

    if (found.length > 0) {
      result = calculateOptimalMove(found[0], start, cameFrom, dimension);
      break;
    }

    frontier = addAllToFrontier(newFrontier, traversableNeighbors, target);
  }

  const direction = Maybe.map(
    nextTile =>
      Maybe.of(
        Direction.all().find(d =>
          Point.equals(nextTile, Point.neighbor(start, d))
        )
      ),
    result
  );

  return Maybe.withDefault(
    Maybe.map(d => [Instruction.move(e.id, d)], direction),
    []
  );
};

export const calculateOptimalMove = (
  target: Point.Point,
  start: Point.Point,
  cameFrom: Map<number, Maybe.Maybe<Point.Point>>,
  dimension: Dimension.Dimension
): Point.Point => {
  let test = target;
  while (true) {
    const back = cameFrom.get(Point.toIndex(test, dimension));
    if (back == start || back == undefined) {
      return test;
    } else {
      test = back;
    }
  }
};
