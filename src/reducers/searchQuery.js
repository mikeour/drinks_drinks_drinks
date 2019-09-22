import types from "../types";

const initialState = {
  searchQuery: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case types.RESET_SEARCH_QUERY:
      return { ...state, searchQuery: "" };
    default:
      return state;
  }
};
