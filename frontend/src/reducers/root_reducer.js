import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import scores from "./score_reducer";

const RootReducer = combineReducers({
  scores,
  session,
  errors
});

export default RootReducer;
