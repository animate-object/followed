import { Dimension } from ".";

export interface MazeData {
  bytes: Uint8Array;
  dimension: Dimension.Dimension;
}

export const fromApi = (
  dimension: Dimension.Dimension,
  base64: string
): MazeData => {
  return {
    bytes: Uint8Array.from(atob(base64), c => c.charCodeAt(0)),
    dimension: dimension
  };
};
