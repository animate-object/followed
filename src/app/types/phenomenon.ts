// import * as GameData from "./game/gameData";
import { Instruction } from ".";
import { SagaIterator } from "redux-saga";

export enum Phenomena {
  FORGETTING,
  KNOW_DOOR_LOCATION = "KNOW_DOOR_LOCATION"
}

type Duration = "FOREVER" | number;

export interface Phenomenon {
  name: Phenomena;
  fn: (
    gameData: any
  ) => Instruction.Instruction[] | SagaIterator<Instruction.Instruction[]>;
  duration: Duration;
}
