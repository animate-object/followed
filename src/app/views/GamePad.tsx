import React from "react";
import { Effect, Direction } from "../types";
import styles from "./GamePad.css";
import classNames from "classnames";

interface DispatchProps {
  onMove: Effect.Effect1<Direction.Direction | undefined>;
}

type Props = DispatchProps;

export const GamePad = ({ onMove }: Props): JSX.Element => (
  <div className={styles.root}>
    <div className={styles.row}>
      <div className={styles.block}></div>
      <div className={styles.block}>
        <button
          className={styles.button}
          onClick={() => onMove(Direction.Direction.NORTH)}
        ></button>
      </div>
      <div className={styles.block}></div>
    </div>
    <div className={styles.row}>
      <div className={styles.block}>
        <button
          className={styles.button}
          onClick={() => onMove(Direction.Direction.WEST)}
        />
      </div>
      <div className={styles.block}>
        <button
          className={classNames(styles.button, styles.wait)}
          onClick={() => onMove(undefined)}
        />
      </div>
      <div className={styles.block}>
        <button
          className={styles.button}
          onClick={() => onMove(Direction.Direction.EAST)}
        ></button>
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.block}></div>
      <div className={styles.block}>
        <button
          className={styles.button}
          onClick={() => onMove(Direction.Direction.SOUTH)}
        ></button>
      </div>
      <div className={styles.block}></div>
    </div>
  </div>
);
