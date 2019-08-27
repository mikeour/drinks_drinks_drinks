import { combineReducers } from "redux";
import sidebar from "./sidebarReducer";
import cocktails from "./cocktailsReducer";
import searchQuery from "./searchQueryReducer";
import drink from "./drinkReducer";

export default combineReducers({
  sidebar,
  cocktails,
  searchQuery,
  drink
});
