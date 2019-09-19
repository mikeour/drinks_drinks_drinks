import { combineReducers } from "redux";
import sidebar from "./sidebarReducer";
import cocktails from "./cocktailsReducer";
import searchQuery from "./searchQueryReducer";
import drink from "./drinkReducer";
import modal from "./modalReducer";

export default combineReducers({
  sidebar,
  cocktails,
  searchQuery,
  drink,
  modal
});
