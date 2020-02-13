import { BaseInstruction, InstructionType } from "./baseInstruction";
import { GameState, GameData } from "../game";

export interface UpdateGameStateInstruction extends BaseInstruction {
  type: InstructionType.UPDATE_GAME_STATE;
  payload: {
    updated: GameState.GameState;
  };
}

export const updateGameState = (
  updated: GameState.GameState
): UpdateGameStateInstruction => ({
  type: InstructionType.UPDATE_GAME_STATE,
  payload: {
    updated
  }
});

export const apply = (
  update: UpdateGameStateInstruction,
  gameData: GameData.GameData
): GameData.GameData => ({
  ...gameData,
  state: update.payload.updated
});
