import React from "react";
import classNames from "classnames";
import "./App.css";
import { connect } from "react-redux";
import { State, GameData } from "../state";
import { Maze, Loadable } from "../types";
import { Grid } from "./Grid";
import { getGame } from "../selectors";

interface StateProps {
  game: Loadable.Loadable<GameData>;
}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

const App = ({ game }: Props) => {
  return (
    <div className={classNames("root", "gray-bg")}>
      {Loadable.isLoading(game) && <span>Loading . . . </span>}
      {Loadable.isLoaded(game) && <Grid grid={game.data.maze.grid}></Grid>}
    </div>
  );
};

export const mapStateToProps = (state: State): StateProps => ({
  game: getGame(state)
});

export default connect(mapStateToProps)(App);
