import React from "react";
import styles from "./Chat.css";
import { Message } from "../types";

interface Props {
  messages: Message.Message[];
}

export const Chat = ({ messages }: Props): JSX.Element => (
  <div className={styles.root}>
    {messages.map((m, i) => (
      <div key={i}>{m.message}</div>
    ))}
  </div>
);
