import types from "../types";

const initialState = {
  drink: {},
  nextDrink: {},
  prevDrink: {},
  showDrinkInfo: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DRINK:
      return { ...state, drink: action.payload };
    case types.UPDATE_NEXT_DRINK:
      return { ...state, nextDrink: action.payload };
    case types.UPDATE_PREV_DRINK:
      return { ...state, prevDrink: action.payload };
    case types.SHOW_DRINK_INFO:
      return { ...state, showDrinkInfo: true };
    case types.HIDE_DRINK_INFO:
      return { ...state, showDrinkInfo: false };
    default:
      return state;
  }
};
