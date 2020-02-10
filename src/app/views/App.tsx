import React, { Dispatch } from "react";
import styles from "./App.css";
import { connect } from "react-redux";
import { State } from "../state";
import { Loadable, Effect, Direction } from "../types";
import {
  getDisplayGrid,
  getIsProcessingStep,
  getWindowedDisplayGrid
} from "../selectors";
import { Game } from "./Game";
import { GameData } from "../types/game";
import { AppAction, movePlayer } from "../actions";
import { WindowedGrid } from "../util/camera";

interface StateProps {
  grid: Loadable.Loadable<WindowedGrid>;
  processingUpdates: boolean;
}

interface DispatchProps {
  onMove: Effect.Effect1<Direction.Direction>;
}

type Props = StateProps & DispatchProps;

const App = ({ grid, processingUpdates, onMove }: Props) => {
  return (
    <div className={styles.root}>
      {Loadable.isLoading(grid) && <span>Loading . . . </span>}
      {Loadable.isLoaded(grid) &&
        grid.data && (
          <Game
            processingUpdates={processingUpdates}
            grid={grid.data}
            onMove={onMove}
          />
        )}
    </div>
  );
};

export const mapStateToProps = (state: State): StateProps => ({
  grid: getWindowedDisplayGrid(state),
  processingUpdates: getIsProcessingStep(state)
});

export const mapDispatchToProps = (
  dispatch: Dispatch<AppAction>
): DispatchProps => ({
  onMove: d => dispatch(movePlayer(d))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
