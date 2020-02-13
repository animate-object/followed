import { ID } from "..";

export interface Won {
  type: "Won";
}

interface Murdered {
  entityId: ID.ID;
}

type CauseOfDeath = Murdered;

export interface Lost {
  type: "Lost";
  causeOfDeath: CauseOfDeath;
}

export interface Playing {
  type: "Playing";
}

export type GameState = Won | Lost | Playing;

export const win = (): Won => ({ type: "Won" });

export const lose = (cod: CauseOfDeath): Lost => ({
  type: "Lost",
  causeOfDeath: cod
});

export const play = (): Playing => ({ type: "Playing" });

export const won = (state: GameState): state is Won => state.type === "Won";
export const lost = (state: GameState): state is Lost => state.type === "Lost";
export const playing = (state: GameState): state is Playing =>
  state.type === "Playing";
