import * as React from "react";
import { Grid } from "./Grid";
import { GameData } from "../types/game";
import { GamePad } from "./GamePad";
import { Effect, Direction } from "../types";

interface Props {
  grid: GameData.DisplayGrid;
  onMove: Effect.Effect1<Direction.Direction>;
}

export const Game = ({ grid, onMove }: Props): JSX.Element => (
  <>
    <Grid grid={grid} />
    <GamePad onMove={onMove} />
  </>
);
