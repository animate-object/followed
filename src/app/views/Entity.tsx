import React from "react";
import { Entity as EntityT } from "../types/entities";
import styles from "./Entity.css";

const getDisplayLetter = (e: EntityT.Entity): string => {
  switch (e.type) {
    case "player":
      return e.name[0].toUpperCase();
    case "sinister-dolls":
      return "D";
    case "wandering-husk":
      return "H";
    case "blind-guardian":
      return "G";
    case "orb-of-knowing":
      return "O";
    case "exit":
      return "E";
    default:
      return "S ";
  }
};

const getColor = (e: EntityT.Entity): string => {
  if (e.type === "player") {
    return "black";
  } else if (e.type === "exit" || e.type === "orb-of-knowing") {
    return "blue";
  } else {
    return "red";
  }
};

export const Entity = (entity: EntityT.Entity): JSX.Element => (
  <div className={styles.root} style={{ color: getColor(entity) }}>
    {getDisplayLetter(entity)}
  </div>
);
