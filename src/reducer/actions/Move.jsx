import ActionTypes from "../ActionTypes";

export const makeNewMove = ({ newPosition }) => {
  return { type: ActionTypes.NEW_MOVE, payload: { newPosition } };
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
