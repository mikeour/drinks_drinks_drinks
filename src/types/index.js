import * as cocktails from "./cocktails";
import * as drink from "./drink";
import * as modal from "./modal";
import * as searchQuery from "./searchQuery";
import * as sidebar from "./sidebar";

export default {
  ...cocktails,
  ...drink,
  ...searchQuery,
  ...sidebar,
  ...modal
};
