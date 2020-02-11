import { ID, Point } from "..";

export enum EntityClass {
  PLAYER = "PLAYER",
  INANIMATE = "INANIMATE",
  HOSTILE = "HOSTILE"
}

export interface BaseEntity {
  position: Point.Point;
  id: ID.ID;
  type: string;
  cls: EntityClass;
}
