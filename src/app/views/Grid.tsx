import React from "react";
import { Cell, EmptyCell } from "./Cell";
import styles from "./Grid.css";
import { Camera } from "../util";
import { Maybe } from "../types";

interface Props {
  grid: Camera.WindowedGrid;
}

export const Grid = ({ grid }: Props): JSX.Element => {
  return (
    <div className={styles.root}>
      {grid.map((row, idx) => (
        <div key={idx} className={styles.row}>
          {row.map((maybeCell, idx) =>
            Maybe.withDefault(
              Maybe.map(
                cell => (
                  <Cell key={idx} cell={cell.cell} occupants={cell.occupants} />
                ),
                maybeCell
              ),
              <EmptyCell />
            )
          )}
        </div>
      ))}
    </div>
  );
};
