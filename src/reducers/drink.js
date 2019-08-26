const initialState = {
  drink: {},
  nextDrink: {},
  prevDrink: {},
  showDrinkInfo: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DRINK":
      return { ...state, drink: action.payload };
    case "UPDATE_NEXT_DRINK":
      return { ...state, nextDrink: action.payload };
    case "UPDATE_PREV_DRINK":
      return { ...state, prevDrink: action.payload };
    case "SHOW_DRINK_INFO":
      return { ...state, showDrinkInfo: true };
    case "HIDE_DRINK_INFO":
      return { ...state, showDrinkInfo: false };
    default:
      return state;
  }
};
