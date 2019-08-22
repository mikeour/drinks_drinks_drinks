import React, { useState, useEffect } from "react";
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
  grid-template-columns: 1fr 5fr;
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

const App = () => {
  const showSidebar = useSelector(({ sidebar }) => sidebar.showSidebar);
  const cocktails = useSelector(({ cocktails }) => cocktails.cocktails);
  const searchQuery = useSelector(({ searchQuery }) => searchQuery.searchQuery);
  const dispatch = useDispatch();

  const setCocktails = payload =>
    dispatch({ type: "UPDATE_COCKTAILS", payload });
  const clearCocktails = () => dispatch({ type: "CLEAR_COCKTAILS" });
  const setSearchQuery = payload =>
    dispatch({ type: "UPDATE_SEARCH_QUERY", payload });

  const handleChange = e => setSearchQuery(e.target.value);
  const handleSidebar = () => dispatch({ type: "TOGGLE_SIDEBAR" });
  const updateSearch = word => setSearchQuery(word);
  const resetSearchQuery = () => setSearchQuery("");

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
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
          }

          :root {
            --primary: floralwhite;
          }
        `}
      />
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
            <Grid updateSearch={updateSearch} searchQuery={searchQuery} />
          )}
        />
        <Route
          path="/drink/"
          render={props => (
            <Drink
              {...props}
              updateSearch={updateSearch}
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
