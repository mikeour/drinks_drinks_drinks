const initialState = {
  cocktails: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COCKTAILS":
      return { ...state, cocktails: action.payload };
    case "CLEAR_COCKTAILS":
      return { ...state, cocktails: [] };
    default:
      return state;
  }
};
