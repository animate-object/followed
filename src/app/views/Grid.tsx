import React from "react";
import { Cell, EmptyCell } from "./Cell";
import styles from "./Grid.css";
import { Camera } from "../util";

interface Props {
  grid: Camera.WindowedGrid;
}

export const Grid = ({ grid }: Props): JSX.Element => {
  return (
    <div className={styles.root}>
      {grid.map((row, idx) => (
        <div key={idx} className={styles.row}>
          {row.map((cellAndOccupants, idx) =>
            cellAndOccupants != undefined ? (
              <Cell
                key={idx}
                cell={cellAndOccupants.cell}
                occupants={cellAndOccupants.occupants}
              />
            ) : (
              <EmptyCell />
            )
          )}
        </div>
      ))}
    </div>
  );
};
