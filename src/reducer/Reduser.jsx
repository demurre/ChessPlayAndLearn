import { Status } from "../constants";
import ActionTypes from "./ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.NEW_MOVE: {
      let { turn, position, movesList } = state;

      turn = turn === "w" ? "b" : "w";

      position = [...position, action.payload.newPosition];

      movesList = [...movesList, action.payload.newMove];

      return { ...state, turn, position, movesList };
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

    case ActionTypes.TAKE_BACK: {
      let { position, movesList, turn } = state;
      if (position.length > 1) {
        position = position.slice(0, position.length - 1);
        movesList = movesList.slice(0, movesList.length - 1);
        turn = turn === "w" ? "b" : "w";
      }
      return { ...state, position, movesList, turn };
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
