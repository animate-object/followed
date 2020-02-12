import React from "react";
import { GameData, EntityData } from "../types/game";
import { LocalStorage, Uri } from "../util";
import { State } from "../state";
import { getGame } from "../selectors";
import { Loadable, Maybe } from "../types";
import { connect } from "react-redux";

const DEV =
  LocalStorage.getSiteSetting("devmode", () => {
    const queryParam = Uri.parseQuery()["devmode"];
    return !!queryParam && queryParam !== "false" ? "true" : undefined;
  }) === "true";

let VERSION: Maybe.Maybe<string>;

fetch(
  `${window.location.href.substring(
    0,
    window.location.href.indexOf("?")
  )}/VERSION`
).then(d => d.text().then(version => (VERSION = version)));

interface Props {
  gameData: Loadable.Loadable<GameData.GameData>;
}

const getEntityCountData = (entityData: EntityData.EntityData): string =>
  "\n\t" +
  Object.keys(entityData.typeMap)
    .map(type_ => `${type_}: ${entityData.typeMap[type_].length}`)
    .join("\n\t");

const gameInfo = (gameData: GameData.GameData): string =>
  [
    `maze algorithm:: ${gameData.maze.algorithm}`,
    `maze dimensions:: ${gameData.maze.dimension.width} x ${gameData.maze.dimension.height}`,
    `entityCount:: ${getEntityCountData(gameData.entityData)}`,
    `step:: ${gameData.stepCount}`,
    `version:: ${VERSION}`
  ].join("\n");

export const InfoButton = ({ gameData }: Props): JSX.Element =>
  DEV && Loadable.isLoaded(gameData) ? (
    <button
      onFocus={e => e.preventDefault()}
      style={{ position: "absolute", top: 5, left: 5 }}
      onClick={() => {
        window.alert(gameInfo(gameData.data));
        Maybe.ifPresent(
          (el: HTMLElement) => el.blur(),
          document.activeElement as HTMLElement
        );
      }}
    >
      ?
    </button>
  ) : (
    <></>
  );

const mapStateToProps = (state: State): Props => ({
  gameData: getGame(state)
});

export default connect(mapStateToProps)(InfoButton);
