import { Instruction, ID } from ".";

export interface Step {
  instructions: Instruction.Instruction[];
  id: ID.ID;
}

export const create = (...instructions: Instruction.Instruction[]): Step => ({
  instructions,
  id: ID.create()
});
