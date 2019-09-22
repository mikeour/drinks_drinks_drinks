import types from "../types";

const initialState = {
  showSidebar: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return { ...state, showSidebar: !state.showSidebar };
    default:
      return state;
  }
};
