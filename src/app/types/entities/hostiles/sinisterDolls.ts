import { BaseEntity } from "..";
import { Point, ID, Direction, Instruction, Maybe } from "../..";
import { GameData } from "../../game";
import { lookForEntityInDirection } from "../../game/gameData";

/**
 * The sinister dolls wait for a playmate
 */

export interface SinisterDolls extends BaseEntity.HostileEntity {
  type: "sinister-dolls";
}

export const create = (
  position: Point.Point = Point.create()
): SinisterDolls => ({
  type: "sinister-dolls",
  position,
  id: ID.create(),
  cls: BaseEntity.EntityClass.HOSTILE
});

export const next = (
  e: SinisterDolls,
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  const towardPlayer = Direction.all().reduce(
    (towardPlayer: Maybe.Maybe<Direction.Direction>, d) =>
      !towardPlayer
        ? lookForEntityInDirection(
            d,
            e.position,
            gameData,
            e => e.type === "player"
          )
          ? d
          : undefined
        : towardPlayer,
    undefined
  );

  return towardPlayer && Math.random() < 0.9
    ? [Instruction.move(e.id, towardPlayer)]
    : [];
};
