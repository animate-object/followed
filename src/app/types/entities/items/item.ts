import { BaseEntity, EntityClass } from "../baseEntity";
import { Phenomenon, Instruction, Point, ID } from "../..";

export interface Item extends BaseEntity {
  cls: EntityClass.ITEM;
  phenomena: Phenomenon.Phenomenon;
  instruction: Instruction.Instruction[];
}

export const baseItem = (
  position: Point.Point
): Omit<Item, "type" | "phenomena" | "instruction"> => ({
  id: ID.create(),
  cls: EntityClass.ITEM,
  position
});
