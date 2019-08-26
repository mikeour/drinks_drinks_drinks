import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import Grid from "../Grid/Grid";
import About from "../About/About";
import Drink from "../Drink/Drink";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

/** @jsx jsx */
import { Global, jsx } from "@emotion/core";
import { globalStyles, showSidebarStyles, hideSidebarStyles } from "./styles";

// Custom Hooks
// TODO: Relocate these hooks outside of this file. Right now, in order for dispatch
//  to have the right context, it must be defined as a child of Provider in index.js

export const useSearchQuery = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchQuery.searchQuery);

  return {
    searchQuery,
    setSearchQuery: payload =>
      dispatch({ type: "UPDATE_SEARCH_QUERY", payload }),
    resetSearchQuery: () => dispatch({ type: "RESET_SEARCH_QUERY" }),
    handleChange: e =>
      dispatch({ type: "UPDATE_SEARCH_QUERY", payload: e.target.value })
  };
};

export const useCocktailsList = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(state => state.cocktails.cocktails);

  return {
    cocktails,
    setCocktails: payload => dispatch({ type: "UPDATE_COCKTAILS", payload }),
    clearCocktails: () => dispatch({ type: "CLEAR_COCKTAILS" })
  };
};

export const useSidebar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector(state => state.sidebar.showSidebar);

  return {
    showSidebar,
    handleSidebar: e => dispatch({ type: "TOGGLE_SIDEBAR" })
  };
};

export const useDrinkInfo = () => {
  const dispatch = useDispatch();
  const drink = useSelector(state => state.drink.drink);
  const nextDrink = useSelector(state => state.drink.nextDrink);
  const prevDrink = useSelector(state => state.drink.prevDrink);
  const showDrinkInfo = useSelector(state => state.drink.showDrinkInfo);

  return {
    drink,
    nextDrink,
    prevDrink,
    showDrinkInfo,
    setDrink: payload => dispatch({ type: "UPDATE_DRINK", payload }),
    setNextDrink: payload => dispatch({ type: "UPDATE_NEXT_DRINK", payload }),
    setPrevDrink: payload => dispatch({ type: "UPDATE_PREV_DRINK", payload }),
    toggleDrinkInfoOn: () => dispatch({ type: "SHOW_DRINK_INFO" }),
    toggleDrinkInfoOff: () => dispatch({ type: "HIDE_DRINK_INFO" })
  };
};

// End of Custom Hooks

const App = () => {
  const { searchQuery } = useSearchQuery();
  const { setCocktails, clearCocktails } = useCocktailsList();
  const { showSidebar } = useSidebar();

  useEffect(() => {
    if (searchQuery !== "") {
      const fetchDrinks = drink => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;
        fetch(url)
          .then(raw => raw.json())
          .then(({ drinks }) => setCocktails(drinks));
      };

      const delayBeforeSearch = setTimeout(() => {
        fetchDrinks(searchQuery);
      }, 1000);

      return () => clearTimeout(delayBeforeSearch);
    } else {
      clearCocktails();
    }
  }, [searchQuery]);

  return (
    <div css={showSidebar ? showSidebarStyles : hideSidebarStyles}>
      <Global styles={globalStyles} />
      <Sidebar />
      <Nav />
      <Switch>
        <Route exact path="/" component={Grid} />
        <Route
          path="/drink/"
          render={({ location }) => <Drink location={location} />}
        />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
