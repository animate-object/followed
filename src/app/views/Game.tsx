import * as React from "react";
import { Grid } from "./Grid";
import { GameData } from "../types/game";

interface Props {
  grid: GameData.DisplayGrid;
}

export const Game = ({ grid }: Props): JSX.Element => (
  <>
    <Grid grid={grid} />
  </>
);
