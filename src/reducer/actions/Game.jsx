import { initGameState } from "../../constants";
import ActionTypes from "../ActionTypes";

export const updateCastling = (direction) => {
  return { type: ActionTypes.CAN_CASTLE, payload: direction };
};

export const detectStalemate = () => {
  return { type: ActionTypes.STALEMATE };
};

export const detectInsufficientMaterial = () => {
  return { type: ActionTypes.INSUFFICIENT_MATERIAL };
};

export const detectCheckmate = (winner) => {
  return { type: ActionTypes.WIN, payload: winner };
};

export const setupNewGame = () => {
  return { type: ActionTypes.NEW_GAME, payload: initGameState };
};
