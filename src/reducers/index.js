import { combineReducers } from "redux";
import sidebar from "./sidebar";
import cocktails from "./cocktails";
import searchQuery from "./searchQuery";
import drink from "./drink";

export default combineReducers({
  sidebar,
  cocktails,
  searchQuery,
  drink
});
