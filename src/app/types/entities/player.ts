import { BaseEntity } from ".";
import { Point, ID } from "..";

export interface Player extends BaseEntity.BaseEntity {
  type: "player";
  name: string;
}

export const create = (
  name: string,
  position: Point.Point = Point.create()
): Player => ({ id: ID.create(), name, position, type: "player" });
