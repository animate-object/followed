import {
  RequestNewGame,
  ActionTypes,
  startNewGame,
  requestNewGame,
  addMessage
} from "../actions";
import { Maze, Dimension, MazeData, Maybe, Message } from "../types";
import { call, take, put } from "redux-saga/effects";
import { Api, Numbers, Arrays } from "../util";
import {
  Player,
  BlindGuardian,
  Entity,
  Exit,
  WanderingHusk,
  SinisterDolls,
  Seeker
} from "../types/entities";
import { OrbOfKnowing } from "../types/entities/items";

const name = Maybe.withDefault(Maybe.of(localStorage.getItem("name")), () => {
  let n = window.prompt("What is your name?") || "";
  if (n !== "") {
    localStorage.setItem("name", n);
  }
  return n !== "" ? n : "?";
});

export function* firstGame() {
  yield put(
    requestNewGame({
      mazeOptions: {
        dimension: Arrays.randomItem([
          Dimension.create(10, 10),
          Dimension.create(15, 15),
          Dimension.create(15, 15),
          Dimension.create(15, 15),
          Dimension.create(15, 15),
          Dimension.create(20, 20),
          Dimension.create(25, 10),
          Dimension.create(10, 25),
          Dimension.create(20, 15),
          Dimension.create(15, 20),
          Dimension.create(30, 5),
          Dimension.create(5, 30)
        ]),
        algorithm: Arrays.randomItem([
          "aldous-broder",
          "aldous-broder",
          "aldous-broder",
          "binary-tree",
          "side-winder"
        ]),
        ...MazeData.randomDirectionalOptions()
      }
    })
  );
}

export function* newGame() {
  while (true) {
    try {
      const { options }: RequestNewGame = yield take(
        ActionTypes.REQUEST_NEW_GAME
      );
      const data: MazeData.MazeData = yield call(
        Api.maze,
        options.mazeOptions || {}
      );
      const fromData: Maze.Maze = Maze.fromMazeData(data);
      const [maze, entities] = startingEntities(fromData);
      yield put(startNewGame(maze, entities));
      yield put(addMessage(Message.create("The game is afoot.")));
    } catch (e) {
      console.warn("Error initializing new game");
      console.error(e);
    }
  }
}

export const startingEntities = (
  prePlacement: Maze.Maze
): [Maze.Maze, Entity.Entity[]] => {
  const { dimension } = prePlacement;

  const player = Player.create(name, Dimension.pointAlongEdge(dimension));
  const guardians = new Array(Numbers.randomInRange(1, 5))
    .fill(undefined)
    .map(_ => BlindGuardian.create(Dimension.randomPoint(dimension)));
  const husks = new Array(Arrays.randomItem([1, 1, 2, 2, 3]))
    .fill(undefined)
    .map(_ => WanderingHusk.create(Dimension.randomPoint(dimension)));

  const enemies = [...guardians, ...husks];

  const { placed, maze, unplaced } = Maze.placeEntitiesInDeadEnds(
    prePlacement,
    [Exit.create, OrbOfKnowing.create]
  );

  if (unplaced.length > 0) {
    console.log(
      `Ran out of deadends to place these entities ${unplaced
        .map(u => u.type)
        .join(", ")}`
    );
  }

  const entities = [player, ...enemies, ...placed];

  return [maze, entities];
};
