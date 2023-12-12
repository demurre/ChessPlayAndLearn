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

    case ActionTypes.CAN_CASTLE: {
      let { turn, castleDirection } = state;
      castleDirection[turn] = action.payload;
      return {
        ...state,
        castleDirection,
      };
    }

    case ActionTypes.STALEMATE: {
      return {
        ...state,
        status: Status.stalemate,
      };
    }

    case ActionTypes.INSUFFICIENT_MATERIAL: {
      return {
        ...state,
        status: Status.insufficient,
      };
    }

    case ActionTypes.WIN: {
      return {
        ...state,
        status: action.payload === "w" ? Status.white : Status.black,
      };
    }

    case ActionTypes.NEW_GAME: {
      return {
        ...action.payload,
      };
    }

    default:
      return state;
  }
};
