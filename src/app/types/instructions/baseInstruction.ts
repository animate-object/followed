import { ID } from "..";

export interface BaseInstruction {
  entityId: ID.ID;
  type: InstructionType;
}

export enum InstructionType {
  MOVE = "MOVE"
}
