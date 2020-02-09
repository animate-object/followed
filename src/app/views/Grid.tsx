import React from "react";
import { Cell } from "./Cell";
import styles from "./Grid.css";
import { GameData } from "../types/game";

interface Props {
  grid: GameData.DisplayGrid;
}

export const Grid = ({ grid }: Props): JSX.Element => {
  return (
    <div className={styles.root}>
      {grid.map((row, idx) => (
        <div key={idx} className={styles.row}>
          {row.map((cellAndOccupants, idx) => (
            <Cell
              key={idx}
              cell={cellAndOccupants.cell}
              occupants={cellAndOccupants.occupants}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
