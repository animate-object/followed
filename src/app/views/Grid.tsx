import React from "react";
import { Maze } from "../types";
import { Cell } from "./Cell";
import styles from "./Grid.css";

interface Props {
  grid: Maze.Grid;
}

export const Grid = ({ grid }: Props): JSX.Element => {
  return (
    <div className={styles.root}>
      {grid.map(row => (
        <div style={{ lineHeight: 0 }}>
          {row.map(cell => (
            <Cell cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};
