import { combineReducers } from "redux";
import sidebar from "./sidebar";
import cocktails from "./cocktails";
import searchQuery from "./searchQuery";
import drink from "./drink";
import modal from "./modal";

export default combineReducers({
  sidebar,
  cocktails,
  searchQuery,
  drink,
  modal
});
