import { Instruction, Phenomenon } from ".";

export interface Outcome {
  instructions: Instruction.Instruction[];
  phenomena: Phenomenon.Phenomenon[];
}

export const create = (
  instructions: Instruction.Instruction[] = [],
  phenomena: Phenomenon.Phenomenon[] = []
) => ({
  instructions,
  phenomena
});

export const instructions = (outcomes: Outcome[]): Instruction.Instruction[] =>
  outcomes.reduce(
    (i: Instruction.Instruction[], o) => [...i, ...o.instructions],
    []
  );

export const phenomena = (outcomes: Outcome[]): Phenomenon.Phenomenon[] =>
  outcomes.reduce(
    (p: Phenomenon.Phenomenon[], o) => [...p, ...o.phenomena],
    []
  );
