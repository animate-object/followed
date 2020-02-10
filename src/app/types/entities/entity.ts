import { Player } from "./player";
import { BlindGuardian } from "./blindGuardian";

export type Entity = Player | BlindGuardian;

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
