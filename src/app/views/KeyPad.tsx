import * as React from "react";
import { Effect, Direction } from "../types";

interface Props {
  onMove: Effect.Effect1<Direction.Direction>;
  disabled: boolean;
}

export class KeyPad extends React.PureComponent<Props> {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <></>;
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.props.disabled) {
      if (event.key === "ArrowUp" || event.key === "w") {
        this.props.onMove(Direction.Direction.NORTH);
      } else if (event.key === "ArrowRight" || event.key === "d") {
        this.props.onMove(Direction.Direction.EAST);
      } else if (event.key === "ArrowDown" || event.key === "d") {
        this.props.onMove(Direction.Direction.SOUTH);
      } else if (event.key === "ArrowLeft" || event.key === "a") {
        this.props.onMove(Direction.Direction.WEST);
      }
    }
  };
}
