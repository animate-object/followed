import * as React from "react";
import { Grid } from "./Grid";
import { GamePad } from "./GamePad";
import { Effect, Direction } from "../types";
import { KeyPad } from "./KeyPad";
import { Camera } from "../util";

interface Props {
  grid: Camera.WindowedGrid;
  onMove: Effect.Effect1<Direction.Direction | undefined>;
  processingUpdates: boolean;
}

export const Game = ({
  grid,
  onMove,
  processingUpdates
}: Props): JSX.Element => (
  <>
    <Grid grid={grid} />
    <GamePad onMove={onMove} />
    <KeyPad onMove={onMove} disabled={processingUpdates} />
  </>
);
