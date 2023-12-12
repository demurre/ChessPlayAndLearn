import ActionTypes from "../actionTypes";

export const makeNewMove = ({ newPosition, newMove }) => {
  return { type: ActionTypes.NEW_MOVE, payload: { newPosition, newMove } };
};

export const generateCandidateMoves = ({ candidateMoves }) => {
  return {
    type: ActionTypes.GENERATE_CANDIDATE_MOVES,
    payload: { candidateMoves },
  };
};

export const clearCandidates = () => {
  return {
    type: ActionTypes.CLEAR_CANDIDATE_MOVES,
  };
};

export const takeBack = () => {
  return {
    type: ActionTypes.TAKE_BACK,
  };
};
