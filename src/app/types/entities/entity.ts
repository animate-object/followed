import { Player } from "./player";

export type Entity = Player;

export const getColor = (e: Entity): string => {
  switch (e.type) {
    case "player":
      return "var(--blue)";
    default:
      return "var(--red)";
  }
};
