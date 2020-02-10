import { BaseEntity } from ".";
import { Point, ID } from "..";

export interface Exit extends BaseEntity.BaseEntity {
  type: "exit";
}

export const create = (position: Point.Point): Exit => ({
  position,
  id: ID.create(),
  type: "exit"
});
