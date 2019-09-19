import { SHOW_MODAL, HIDE_MODAL } from "../actions";

const initialState = {
  isModalShowing: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isModalShowing: true };
    case HIDE_MODAL:
      return { ...state, isModalShowing: false };
    default:
      return state;
  }
};
