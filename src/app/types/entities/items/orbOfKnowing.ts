import * as Point from "../../point";
import * as Phenomenon from "../../phenomenon";
import * as Instruction from "../../instructions";
import * as GameData from "../../game/gameData";
import * as EntityData from "../../game/entityData";
import * as Exit from "../exit";
import { Item, baseItem } from "./item";
import { ID } from "../..";

export interface OrbOfKnowing extends Item {
  type: "orb-of-knowing";
}

export const create = (position: Point.Point): OrbOfKnowing => {
  const base = baseItem(position);
  return {
    ...base,
    type: "orb-of-knowing",
    phenomena: knowing(base.id),
    instruction: []
  };
};
export const knowing = (id: ID.ID): Phenomenon.Phenomenon => ({
  name: Phenomenon.Phenomena.KNOW_DOOR_LOCATION,
  duration: 1,
  fn: (gameData: GameData.GameData): Instruction.Instruction[] => {
    alert(
      "You feel enlightened by the forces of providence.\n" +
        "For in thine posession is the Orb of Knowing."
    );
    return [
      ...EntityData.byType(gameData.entityData, "exit")
        .map(e => e as Exit.Exit)
        .map(exit => Point.toIndex(exit.position, gameData.maze.dimension))
        .map(p => Instruction.see([p])),
      Instruction.remove(id)
    ];
  }
});
