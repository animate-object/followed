import React from "react";
import classNames from "classnames";
import "./App.css";
import { connect } from "react-redux";
import { State, GameData } from "../state";
import { Loadable } from "../types";
import { getGame } from "../selectors";
import { Game } from "./Game";

interface StateProps {
  game: Loadable.Loadable<GameData>;
}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

const App = ({ game }: Props) => {
  return (
    <div className={classNames("root")}>
      {Loadable.isLoading(game) && <span>Loading . . . </span>}
      {Loadable.isLoaded(game) && <Game {...game.data} />}
    </div>
  );
};

export const mapStateToProps = (state: State): StateProps => ({
  game: getGame(state)
});

export default connect(mapStateToProps)(App);
