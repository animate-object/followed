import React from "react";
import { Cell as CellT, Dimension } from "../types";

interface Props {
  cell: CellT.Cell;
}

const IS_WALL = "0.5px solid black";
const IS_OPEN = "0.5px transparent";
const drawSide = (wall: boolean) => (wall ? IS_WALL : IS_OPEN);

export const Cell = ({ cell }: Props): JSX.Element => {
  const { walls } = cell;
  return (
    <span
      style={{
        boxSizing: "border-box",
        borderTop: drawSide(walls.n),
        borderRight: drawSide(walls.e),
        borderBottom: drawSide(walls.s),
        borderLeft: drawSide(walls.w),
        height: "2rem",
        width: "2rem",
        display: "inline-block"
      }}
    />
  );
};
