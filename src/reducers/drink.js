const initialState = {
  drink: {},
  nextDrink: {},
  prevDrink: {},
  redirect: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DRINK":
      return { ...state, drink: action.payload };
    case "UPDATE_NEXT_DRINK":
      return { ...state, nextDrink: action.payload };
    case "UPDATE_PREV_DRINK":
      return { ...state, prevDrink: action.payload };
    case "UPDATE_REDIRECT":
      return { ...state, redirect: true };
    default:
      return state;
  }
};
