import ActionTypes from "../actionTypes";

export const openPromotion = ({ rank, file, x, y }) => {
  return { type: ActionTypes.PROMOTION_OPEN, payload: { rank, file, x, y } };
};

export const closePopup = () => {
  return { type: ActionTypes.PROMOTION_CLOSE };
};
