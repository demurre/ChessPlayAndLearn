import ActionTypes from "./ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.NEW_MOVE: {
      let { turn, position } = state;

      turn = turn === "w" ? "b" : "w";

      position = [...position, action.payload.newPosition];
      return { ...state, turn, position };
    }

    case ActionTypes.GENERATE_CANDIDATE_MOVES: {
      return { ...state, candidateMoves: action.payload.candidateMoves };
    }

    case ActionTypes.CLEAR_CANDIDATE_MOVES: {
      return { ...state, candidateMoves: [] };
    }

    default:
      return state;
  }
};
