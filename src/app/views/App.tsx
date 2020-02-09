import React from "react";
import styles from "./App.css";
import { connect } from "react-redux";
import { State } from "../state";
import { Loadable } from "../types";
import { getDisplayGrid } from "../selectors";
import { Game } from "./Game";
import { GameData } from "../types/game";

interface StateProps {
  grid: Loadable.Loadable<GameData.DisplayGrid>;
}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

const App = ({ grid }: Props) => {
  return (
    <div className={styles.root}>
      {Loadable.isLoading(grid) && <span>Loading . . . </span>}
      {Loadable.isLoaded(grid) && <Game grid={grid.data} />}
    </div>
  );
};

export const mapStateToProps = (state: State): StateProps => ({
  grid: getDisplayGrid(state)
});

export default connect(mapStateToProps)(App);
