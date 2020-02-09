import { ID, Point } from "..";

export interface BaseEntity {
  position: Point.Point;
  id: ID.ID;
  type: string;
  name: string;
}
