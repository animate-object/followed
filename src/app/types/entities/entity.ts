import { GameData, GameState } from "../game";
import { Instruction, Outcome } from "..";
import {
  BlindGuardian,
  Player,
  Exit,
  WanderingHusk,
  Entity,
  SinisterDolls
} from ".";
import { EntityClass } from "./baseEntity";
import { Items, OrbOfKnowing } from "./items";

export type HostileEntities =
  | BlindGuardian.BlindGuardian
  | WanderingHusk.WanderingHusk
  | SinisterDolls.SinisterDolls;

export type Entity = Player.Player | Exit.Exit | HostileEntities | Items;

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
    case "orb-of-knowing":
      return OrbOfKnowing.DISPLAY;
    case "sinister-dolls":
      return SinisterDolls.DISPLAY;
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
    case "orb-of-knowing":
      return "a mysterious, translucent orb";
    case "sinister-dolls":
      return "two lifelike dolls";
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
    case "sinister-dolls":
      return SinisterDolls.next(e, gameData);
    default:
      return [];
  }
};

export const onCollideWithPlayer = (
  e: Entity,
  gameData: GameData.GameData
): Outcome.Outcome => {
  if (e.cls === EntityClass.HOSTILE) {
    return Outcome.create([
      Instruction.updateGameState(GameState.lose({ entityId: e.id }))
    ]);
  } else if (e.cls === EntityClass.ITEM) {
    return Outcome.create(undefined, [e.phenomena]);
  } else if (e.type === "exit") {
    return Outcome.create([Instruction.updateGameState(GameState.win())]);
  } else {
    return Outcome.create();
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
    case "sinister-dolls":
      return `The dolls draw closer. ${p.name} is frozen. Then, darkness. ${p.name} is never heard from again.`;
    default:
      return `${p.name} was killed by ${getDescription(killer)}`;
  }
};
