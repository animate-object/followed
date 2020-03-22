import * as Point from "../../point";
import * as Phenomenon from "../../phenomenon";
import * as Instruction from "../../instructions";
import * as GameData from "../../game/gameData";
import * as EntityData from "../../game/entityData";
import * as Exit from "../exit";
import { Item, baseItem } from "./item";
import { ID, Maze } from "../..";
import { Seeker } from "..";
import { Arrays } from "../../../util";

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

    alert("Something has entered the maze.");

    return [
      ...EntityData.byType(gameData.entityData, "exit")
        .map(e => e as Exit.Exit)
        .map(exit => Point.toIndex(exit.position, gameData.maze.dimension))
        .map(p => Instruction.see([p])),
      Instruction.add(
        Seeker.create(
          Point.fromIndex(
            Arrays.randomItem(gameData.maze.deadends.unused),
            gameData.maze.dimension
          )
        )
      ),
      Instruction.remove(id)
    ];
  }
});
