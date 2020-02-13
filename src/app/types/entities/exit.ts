import { BaseEntity } from ".";
import { Point, ID } from "..";

export interface Exit extends BaseEntity.BaseEntity {
  type: "exit";
  cls: BaseEntity.EntityClass.INANIMATE;
}

export const create = (position: Point.Point): Exit => ({
  position,
  id: ID.create(),
  type: "exit",
  cls: BaseEntity.EntityClass.INANIMATE
});

export const DISPLAY = "🚪";
