import { v4 } from "uuid";

export type ID = string;

export const create = (): ID => v4();
