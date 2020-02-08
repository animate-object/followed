import * as React from "react";
import { GameData } from "../state";
import { Grid } from "./Grid";

type Props = GameData;

export const Game = ({ maze }: Props): JSX.Element => (
  <>
    <Grid grid={maze.grid} />
  </>
);
