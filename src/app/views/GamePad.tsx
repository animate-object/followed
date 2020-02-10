import React from "react";
import { Effect, Direction } from "../types";
import styles from "./GamePad.css";
import classNames from "classnames";

interface DispatchProps {
  onMove: Effect.Effect1<Direction.Direction>;
}

type Props = DispatchProps;

export const GamePad = ({ onMove }: Props): JSX.Element => (
  <div className={styles.root}>
    <div className={styles.row}>
      <div className={styles.block}></div>
      <button
        className={classNames(styles.block, styles.button)}
        onClick={() => onMove(Direction.Direction.NORTH)}
      ></button>
      <div className={styles.block}></div>
    </div>
    <div className={styles.row}>
      <button
        className={classNames(styles.block, styles.button)}
        onClick={() => onMove(Direction.Direction.WEST)}
      ></button>
      <div className={styles.block}></div>
      <button
        className={classNames(styles.block, styles.button)}
        onClick={() => onMove(Direction.Direction.EAST)}
      ></button>
    </div>
    <div className={styles.row}>
      <div className={styles.block}></div>
      <button
        className={classNames(styles.block, styles.button)}
        onClick={() => onMove(Direction.Direction.SOUTH)}
      ></button>
      <div className={styles.block}></div>
    </div>
  </div>
);
