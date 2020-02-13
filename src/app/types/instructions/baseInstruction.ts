export interface BaseInstruction {
  type: InstructionType;
}

export enum InstructionType {
  MOVE = "MOVE",
  UPDATE = "UPDATE",
  WAIT = "WAIT",
  UPDATE_GAME_STATE = "UPDATE_GAME_STATE",
  SEE = "SEE",
  REMOVE = "REMOVE",
  ADD = "ADD"
}
