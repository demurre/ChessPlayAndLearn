import { initGameState } from "../../constants";
import ActionTypes from "../ActionTypes";

export const updateCastling = (direction) => {
  return { type: ActionTypes.CAN_CASTLE, payload: direction };
};

export const detectStalemate = () => {
  return { type: ActionTypes.STALEMATE };
};

export const setupNewGame = () => {
  return { type: ActionTypes.NEW_GAME, payload: initGameState };
};
