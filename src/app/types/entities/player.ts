import { BaseEntity } from ".";
import { Point, ID } from "..";
import { Arrays } from "../../util";

export interface Player extends BaseEntity.BaseEntity {
  type: "player";
  name: string;
  visionRadius: number;
  displayName: string;
}

export const create = (
  name: string,
  position: Point.Point = Point.create(),
  visionRadius: number = 5,
  displayName: string = randomDisplayName()
): Player => ({
  id: ID.create(),
  name,
  position,
  type: "player",
  visionRadius,
  displayName: displayName || name
});

export const randomDisplayName = (): string =>
  Arrays.randomItem([
    "🐕",
    "🐦",
    "🐈",
    "🐎",
    "🐖",
    "🐁",
    "🐀",
    "🐢"
    // "🚶‍♂️",
    // "🚶‍♀️"
  ]);
