import React from "react";
import { Entity as EntityT } from "../types/entities";
import styles from "./Entity.css";

export const Entity = (entity: EntityT.Entity): JSX.Element => (
  <div
    className={styles.root}
    style={{ backgroundColor: EntityT.getColor(entity) }}
  >
    {EntityT.getDisplayName(entity)}
  </div>
);
