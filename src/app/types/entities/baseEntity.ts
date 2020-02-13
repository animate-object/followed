import { ID, Point } from "..";

export enum EntityClass {
  PLAYER = "PLAYER",
  INANIMATE = "INANIMATE",
  HOSTILE = "HOSTILE",
  ITEM = "ITEM"
}

export interface BaseEntity {
  position: Point.Point;
  id: ID.ID;
  type: string;
  cls: EntityClass;
}

export interface HostileEntity extends BaseEntity {
  cls: EntityClass.HOSTILE;
}
