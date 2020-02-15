import * as React from "react";
import { Grid } from "./Grid";
import { GamePad } from "./GamePad";
import { Effect, Direction } from "../types";
import { KeyPad } from "./KeyPad";
import { Camera } from "../util";
import MediaQuery from "react-responsive";

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
  <MediaQuery minWidth={1024}>
    {largeScreen => (
      <>
        <Grid grid={grid} largeScreen={largeScreen} />
        {!largeScreen && <GamePad onMove={onMove} />}
        <KeyPad onMove={onMove} disabled={processingUpdates} />
      </>
    )}
  </MediaQuery>
);
