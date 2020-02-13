import { GameData } from "../game";
import { Instruction } from "..";
import { BlindGuardian, Player, Exit, WanderingHusk } from ".";
import { EntityData } from "../game/entityData";

export type HostileEntity =
  | BlindGuardian.BlindGuardian
  | WanderingHusk.WanderingHusk;

export type Entity = Player.Player | Exit.Exit | HostileEntity;

export const getColor = (e: Entity): string => {
  switch (e.type) {
    default:
      return "transparent";
  }
};

export const getDisplayName = (e: Entity): string => {
  switch (e.type) {
    case "player":
      return e.displayName;
    case "blind-guardian":
      return BlindGuardian.DISPLAY;
    case "exit":
      return Exit.DISPLAY;
    case "wandering-husk":
      return WanderingHusk.DISPLAY;
  }
};

export const getDescription = (e: Entity): string => {
  switch (e.type) {
    case "player":
      return e.name;
    case "blind-guardian":
      return "a blind guardian";
    case "exit":
      return "an exit";
    case "wandering-husk":
      return "a wandering husk";
  }
};

export const generateAiInstructions = (
  e: Entity,
  gameData: GameData.GameData
): Instruction.Instruction[] => {
  switch (e.type) {
    case "blind-guardian":
      return BlindGuardian.next(e, gameData);
    case "wandering-husk":
      return WanderingHusk.next(e, gameData);
    default:
      return [];
  }
};

export const getKillMessage = (p: Player.Player, killer: Entity): string => {
  switch (killer.type) {
    case "blind-guardian":
      return `${p.name} has been annihilated by ${getDescription(
        killer
      )}. Nothing is left.`;
    case "wandering-husk":
      return `Blood and sinew cling to the maw of the wandering husk. ${p.name} has been consumed.`;
    default:
      return `${p.name} was killed by ${getDescription(killer)}`;
  }
};
