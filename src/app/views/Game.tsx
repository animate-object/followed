import * as React from "react";
import { Grid } from "./Grid";
import { GameData } from "../types/game";
import { GamePad } from "./GamePad";
import { Effect, Direction } from "../types";
import { KeyPad } from "./KeyPad";

interface Props {
  grid: GameData.DisplayGrid;
  onMove: Effect.Effect1<Direction.Direction>;
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
