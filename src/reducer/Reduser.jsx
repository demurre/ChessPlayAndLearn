import { Status } from "../constants";
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

    case ActionTypes.PROMOTION_OPEN: {
      return {
        ...state,
        status: Status.promoting,
        promotionSquare: { ...action.payload },
      };
    }

    case ActionTypes.PROMOTION_CLOSE: {
      return {
        ...state,
        status: Status.ongoing,
        promotionSquare: null,
      };
    }

    default:
      return state;
  }
};
