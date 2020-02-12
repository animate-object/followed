import { Dimension } from ".";

type Algorithm = "aldous-broder" | "binary-tree" | "side-winder";

export interface MazeData {
  bytes: Uint8Array;
  dimension: Dimension.Dimension;
  algorithm: Algorithm;
}

export interface Options {
  dimension?: Dimension.Dimension;
  algorithm?: Algorithm;
}

export const fromApi = (
  dimension: Dimension.Dimension,
  algorithm: Algorithm,
  base64: string
): MazeData => {
  return {
    bytes: Uint8Array.from(atob(base64), c => c.charCodeAt(0)),
    dimension,
    algorithm
  };
};
