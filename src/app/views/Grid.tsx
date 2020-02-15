import React from "react";
import { Cell, EmptyCell } from "./Cell";
import styles from "./Grid.css";
import { Camera } from "../util";
import { Maybe } from "../types";
import classNames from "classnames";

interface Props {
  grid: Camera.WindowedGrid;
  largeScreen: boolean;
}

export const Grid = ({ grid, largeScreen }: Props): JSX.Element => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.large]: largeScreen
      })}
    >
      {grid.map((row, idx) => (
        <div key={idx} className={styles.row}>
          {row.map((maybeCell, idx) =>
            Maybe.withDefault(
              Maybe.map(
                cell => <Cell key={idx} cell={cell.cell} meta={cell.meta} />,
                maybeCell
              ),
              <EmptyCell key={idx} />
            )
          )}
        </div>
      ))}
    </div>
  );
};
