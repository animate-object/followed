import React from "react";
import { Entity as EntityT } from "../types/entities";
import styles from "./Entity.css";

export const Entity = (props: EntityT.Entity): JSX.Element => (
  <div
    className={styles.root}
    style={{ backgroundColor: EntityT.getColor(props) }}
  >
    {props.name[0]}
  </div>
);
