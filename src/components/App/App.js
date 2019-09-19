import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSearchQuery, useCocktailsList, useSidebar } from "../../hooks";
import Nav from "../Nav/Nav";
import Grid from "../Grid/Grid";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import About from "../About/About";
import Drink from "../Drink/Drink";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

/** @jsx jsx */
import { Global, jsx } from "@emotion/core";
import { globalStyles, showSidebarStyles, hideSidebarStyles } from "./styles";

const App = () => {
  const { searchQuery } = useSearchQuery();
  const {
    setCocktails,
    clearCocktails,
    toggleLoadingOff,
    toggleLoadingOn
  } = useCocktailsList();
  const { showSidebar } = useSidebar();

  useEffect(() => {
    if (searchQuery !== "") {
      toggleLoadingOn();

      const fetchDrinks = drink => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`;
        fetch(url)
          .then(raw => raw.json())
          .then(({ drinks }) => setCocktails(drinks))
          .then(toggleLoadingOff);
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
    <div
      css={showSidebar ? showSidebarStyles : hideSidebarStyles}
      data-testid="application"
    >
      <Global styles={globalStyles} />
      <Sidebar />
      <Nav />
      <Switch>
        <Route exact path="/" component={Grid} />
        <Route
          path="/drink/"
          render={({ location }) => <Drink location={location} />}
        />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
