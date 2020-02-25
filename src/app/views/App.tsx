import React, { Dispatch } from "react";
import styles from "./App.css";
import { connect } from "react-redux";
import { State } from "../state";
import { Loadable, Effect, Direction, Message } from "../types";
import {
  getIsProcessingStep,
  getWindowedDisplayGrid,
  getMessages
} from "../selectors";
import { Game } from "./Game";
import { AppAction, movePlayer } from "../actions";
import { WindowedGrid } from "../util/camera";
import InfoButton from "./InfoButton";

interface StateProps {
  grid: Loadable.Loadable<WindowedGrid>;
  processingUpdates: boolean;
  messages: Message.Message[];
}

interface DispatchProps {
  onMove: Effect.Effect1<Direction.Direction | undefined>;
}

type Props = StateProps & DispatchProps;

const App = ({ grid, processingUpdates, messages, onMove }: Props) => {
  return (
    <div className={styles.root}>
      {Loadable.isLoading(grid) && <span>Loading . . . </span>}
      {Loadable.isLoaded(grid) && grid.data && (
        <>
          <InfoButton />
          <Game
            processingUpdates={processingUpdates}
            grid={grid.data}
            onMove={onMove}
            messages={messages}
          />
        </>
      )}
    </div>
  );
};

export const mapStateToProps = (state: State): StateProps => ({
  grid: getWindowedDisplayGrid(state),
  processingUpdates: getIsProcessingStep(state),
  messages: getMessages(state)
});

export const mapDispatchToProps = (
  dispatch: Dispatch<AppAction>
): DispatchProps => ({
  onMove: d => dispatch(movePlayer(d))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
