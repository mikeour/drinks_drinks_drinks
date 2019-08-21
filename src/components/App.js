import React, { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Grid from "./Grid";
import About from "./About";
import Drink from "./Drink";
import Footer from "./Footer";

/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import Sidebar from "./Sidebar";

export default () => {
  const [cocktails, setCocktails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

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
      setCocktails([]);
    }
  }, [searchQuery]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  const updateSearch = word => {
    setSearchQuery(word);
  };

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

  const resetSearchQuery = () => setSearchQuery("");

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
          render={props => (
            <Grid
              cocktails={cocktails}
              updateSearch={updateSearch}
              searchQuery={searchQuery}
            />
          )}
        />
        <Route path="/drink/" component={Drink} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};