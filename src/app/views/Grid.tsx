import React from "react";
import { Maze } from "../types";

interface Props {
  grid: Maze.Grid;
}

export const Grid = ({ grid }: Props): JSX.Element => {
  return (
    <div>
      {grid.map(row => (
        <div>{row.map(cell => "a")}</div>
      ))}
    </div>
  );
};
