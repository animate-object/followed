import { GameData } from "../game";
import { Instruction } from "..";
import { BlindGuardian, Player } from ".";

export type Entity = Player.Player | BlindGuardian.BlindGuardian;

export const getColor = (e: Entity): string => {
  switch (e.type) {
    case "player":
      return "var(--blue)";
    default:
      return "var(--red)";
  }
};

export const getDisplayName = (e: Entity): string => {
  switch (e.type) {
    case "player":
      return e.name[0];
    default:
      return e.type[0];
  }
};

export const generateAiInstructions = (
  e: Entity,
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  switch (e.type) {
    case "blind-guardian":
      return BlindGuardian.next(e, gameData);
    default:
      return [];
  }
};
