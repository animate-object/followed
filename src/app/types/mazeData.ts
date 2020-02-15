import { Dimension } from ".";
import { Arrays } from "../util";

type Algorithm = "aldous-broder" | "binary-tree" | "side-winder";

export interface MazeData {
  bytes: Uint8Array;
  dimension: Dimension.Dimension;
  algorithm: Algorithm;
}

type ApiCorner = "nw" | "ne" | "sw" | "se";
type ApiDir = "n" | "e" | "s" | "w";

export interface Options {
  dimension?: Dimension.Dimension;
  algorithm?: Algorithm;
  corner?: ApiCorner;
  direction?: ApiDir;
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

export const randomDirectionalOptions = (): Pick<
  Options,
  "corner" | "direction"
> => ({
  corner: Arrays.randomItem(["nw", "ne", "sw", "se"]),
  direction: Arrays.randomItem(["n", "e", "s", "w"])
});
