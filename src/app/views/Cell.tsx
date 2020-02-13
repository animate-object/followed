import React from "react";
import { Cell as CellT, Maybe } from "../types";
import styles from "./Cell.css";
import classNames from "classnames";
import { CellMeta } from "../types/game/gameData";
import { Entity as EntityT } from "../types/entities";
import { Entity } from "./Entity";

interface Props {
  cell: CellT.Cell;
  meta: CellMeta;
}

const IS_WALL = "0.5px solid cyan";
const IS_OPEN = "0.5px transparent";
const drawSide = (wall: boolean) => (wall ? IS_WALL : IS_OPEN);

const getEntityToDraw = ({
  visible,
  seen,
  occupants
}: CellMeta): Maybe.Maybe<EntityT.Entity> => {
  if (visible) {
    return Maybe.withDefault(
      occupants.find(e => e.type !== "player" && e.type !== "exit"),
      occupants[0]
    );
  } else if (seen) {
    return occupants.find(e => e.type === "exit");
  }
};

export const Cell = ({ cell, meta }: Props): JSX.Element => {
  const { walls } = cell;
  return (
    <div
      className={classNames(styles.root, {
        [styles.seen]: meta.seen,
        [styles.visible]: meta.visible,
        [styles.unknown]: !meta.seen && !meta.visible
      })}
      style={
        !meta.unknown
          ? {
              borderTop: drawSide(walls.n),
              borderRight: drawSide(walls.e),
              borderBottom: drawSide(walls.s),
              borderLeft: drawSide(walls.w)
            }
          : undefined
      }
    >
      {Maybe.map(
        o => (
          <Entity {...o} />
        ),
        getEntityToDraw(meta)
      )}
    </div>
  );
};

export const EmptyCell = () => (
  <div className={classNames(styles.empty, styles.root)}></div>
);
