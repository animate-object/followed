import { GameData } from "../game";
import { Instruction } from "..";
import { BlindGuardian, Player, Exit } from ".";

export type Entity = Player.Player | BlindGuardian.BlindGuardian | Exit.Exit;

export const getColor = (e: Entity): string => {
  switch (e.type) {
    case "player":
      return "var(--blue)";
    case "exit":
      return "var(--green)";
    case "blind-guardian":
      return "transparent";
    default:
      return "var(--red)";
  }
};

export const getDisplayName = (e: Entity): string => {
  switch (e.type) {
    case "player":
      return e.name[0];
    case "blind-guardian":
      return BlindGuardian.DISPLAY;
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
