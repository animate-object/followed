import React, { Dispatch } from "react";
import styles from "./App.css";
import { connect } from "react-redux";
import { State } from "../state";
import { Loadable, Effect, Direction } from "../types";
import { getDisplayGrid } from "../selectors";
import { Game } from "./Game";
import { GameData } from "../types/game";
import { AppAction, movePlayer } from "../actions";

interface StateProps {
  grid: Loadable.Loadable<GameData.DisplayGrid>;
}

interface DispatchProps {
  onMove: Effect.Effect1<Direction.Direction>;
}

type Props = StateProps & DispatchProps;

const App = ({ grid, onMove }: Props) => {
  return (
    <div className={styles.root}>
      {Loadable.isLoading(grid) && <span>Loading . . . </span>}
      {Loadable.isLoaded(grid) && <Game grid={grid.data} onMove={onMove} />}
    </div>
  );
};

export const mapStateToProps = (state: State): StateProps => ({
  grid: getDisplayGrid(state)
});

export const mapDispatchToProps = (
  dispatch: Dispatch<AppAction>
): DispatchProps => ({
  onMove: d => dispatch(movePlayer(d))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
