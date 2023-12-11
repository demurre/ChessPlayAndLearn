import { createPosition } from "./Helper";

export const initGameState = {
  position: [createPosition()],
  turn: "w",
  candidateMoves: [],
};
