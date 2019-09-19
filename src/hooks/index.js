import { useSelector, useDispatch } from "react-redux";

import {
  UPDATE_COCKTAILS,
  CLEAR_COCKTAILS,
  TOGGLE_LOADING_ON,
  TOGGLE_LOADING_OFF,
  UPDATE_DRINK,
  UPDATE_NEXT_DRINK,
  UPDATE_PREV_DRINK,
  SHOW_DRINK_INFO,
  HIDE_DRINK_INFO,
  UPDATE_SEARCH_QUERY,
  RESET_SEARCH_QUERY,
  TOGGLE_SIDEBAR,
  SHOW_MODAL,
  HIDE_MODAL
} from "../actions/";

export const useSearchQuery = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(state => state.searchQuery);

  return {
    searchQuery,
    setSearchQuery: payload => dispatch({ type: UPDATE_SEARCH_QUERY, payload }),
    resetSearchQuery: () => dispatch({ type: RESET_SEARCH_QUERY }),
    handleChange: e =>
      dispatch({ type: UPDATE_SEARCH_QUERY, payload: e.target.value })
  };
};

export const useCocktailsList = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector(state => state.cocktails);

  return {
    cocktails,
    loading,
    setCocktails: payload => dispatch({ type: UPDATE_COCKTAILS, payload }),
    clearCocktails: () => dispatch({ type: CLEAR_COCKTAILS }),
    toggleLoadingOn: () => dispatch({ type: TOGGLE_LOADING_ON }),
    toggleLoadingOff: () => dispatch({ type: TOGGLE_LOADING_OFF })
  };
};

export const useSidebar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector(state => state.sidebar);

  return {
    showSidebar,
    handleSidebar: e => dispatch({ type: TOGGLE_SIDEBAR })
  };
};

export const useDrinkInfo = () => {
  const dispatch = useDispatch();
  const { drink, nextDrink, prevDrink, showDrinkInfo } = useSelector(
    state => state.drink
  );

  return {
    drink,
    nextDrink,
    prevDrink,
    showDrinkInfo,
    setDrink: payload => dispatch({ type: UPDATE_DRINK, payload }),
    setNextDrink: payload => dispatch({ type: UPDATE_NEXT_DRINK, payload }),
    setPrevDrink: payload => dispatch({ type: UPDATE_PREV_DRINK, payload }),
    toggleDrinkInfoOn: () => dispatch({ type: SHOW_DRINK_INFO }),
    toggleDrinkInfoOff: () => dispatch({ type: HIDE_DRINK_INFO })
  };
};

export const useModal = () => {
  const dispatch = useDispatch();
  const { isModalShowing } = useSelector(state => state.modal);

  return {
    isModalShowing,
    showModal: () => dispatch({ type: SHOW_MODAL }),
    hideModal: () => dispatch({ type: HIDE_MODAL })
  };
};
