import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";
import Grid from "./Grid";
import About from "./About";
import Drink from "./Drink";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";

const showSidebarStyles = css`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "side nav"
    "side grid"
    "side footer";
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 2fr 14fr 1fr;
`;

const hideSidebarStyles = css`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav"
    "grid"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 14fr 1fr;
`;

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  :root {
    --primary: honeydew;
  }
`;

// Custom Hooks

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

// End of Custom Hooks

const App = () => {
  const {
    searchQuery,
    setSearchQuery,
    resetSearchQuery,
    handleChange
  } = useSearchQuery();
  const { cocktails, setCocktails, clearCocktails } = useCocktailsList();
  const { showSidebar, handleSidebar } = useSidebar();

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

  useEffect(() => console.log("App is rendered"));

  return (
    <div css={showSidebar ? showSidebarStyles : hideSidebarStyles}>
      <Global styles={globalStyles} />
      <Sidebar showSidebar={showSidebar} resetSearchQuery={resetSearchQuery} />
      <Nav
        handleChange={handleChange}
        handleSidebar={handleSidebar}
        searchQuery={searchQuery}
        resetSearchQuery={resetSearchQuery}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Grid setSearchQuery={setSearchQuery} cocktails={cocktails} />
          )}
        />
        <Route
          path="/drink/"
          render={props => (
            <Drink
              {...props}
              setSearchQuery={setSearchQuery}
              cocktails={cocktails}
              setCocktails={setCocktails}
            />
          )}
        />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
