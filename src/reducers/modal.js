import types from "../types";

const initialState = {
  isModalShowing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, isModalShowing: true };
    case types.HIDE_MODAL:
      return { ...state, isModalShowing: false };
    default:
      return state;
  }
};
