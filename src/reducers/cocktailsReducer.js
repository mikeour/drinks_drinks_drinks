const initialState = {
  cocktails: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COCKTAILS":
      return { ...state, cocktails: action.payload };
    case "CLEAR_COCKTAILS":
      return { ...state, cocktails: [] };
    case "TOGGLE_LOADING_ON":
      return { ...state, loading: true };
    case "TOGGLE_LOADING_OFF":
      return { ...state, loading: false };
    default:
      return state;
  }
};
