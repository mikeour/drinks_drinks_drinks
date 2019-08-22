import { combineReducers } from "redux";
import sidebar from "./sidebar";
import cocktails from "./cocktails";
import searchQuery from "./searchQuery";

export default combineReducers({
  sidebar,
  cocktails,
  searchQuery
});
