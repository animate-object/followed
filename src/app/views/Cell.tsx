import React from "react";
import { Cell as CellT, Maybe } from "../types";
import styles from "./Cell.css";
import { Entity as EntityT } from "../types/entities";
import { Entity } from "./Entity";
import classNames from "classnames";

interface Props {
  cell: CellT.Cell;
  occupants: EntityT.Entity[];
}

const IS_WALL = "0.5px solid black";
const IS_OPEN = "0.5px transparent";
const drawSide = (wall: boolean) => (wall ? IS_WALL : IS_OPEN);

export const Cell = ({ cell, occupants }: Props): JSX.Element => {
  const { walls } = cell;
  return (
    <div
      className={styles.root}
      style={{
        borderTop: drawSide(walls.n),
        borderRight: drawSide(walls.e),
        borderBottom: drawSide(walls.s),
        borderLeft: drawSide(walls.w)
      }}
    >
      {Maybe.map(
        o => (
          <Entity {...o} />
        ),
        occupants[0]
      )}
    </div>
  );
};

export const EmptyCell = () => (
  <div className={classNames(styles.empty, styles.root)}></div>
);
