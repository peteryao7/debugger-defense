import { RECEIVE_SCORES, RECEIVE_SINGLE_SCORE } from "../actions/score_actions";

const scoreReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_SCORES:
      return action.scores;
    case RECEIVE_SINGLE_SCORE:
      let newState = state;
      return newState.concat([action.score]).sort(compare);
    default:
      return state;
  }
};

function compare(a, b) {
  if (a.score < b.score)
    return 1;
  if (a.score > b.score)
    return -1;
  return 0;
}

export default scoreReducer;
