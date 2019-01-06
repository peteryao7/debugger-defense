import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import scores from "./score_reducer";
import modal from "./modal_reducer";

const RootReducer = combineReducers({
  scores,
  session,
  errors,
  modal
});

export default RootReducer;
