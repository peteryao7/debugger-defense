import { RECEIVE_SCORES, RECEIVE_SINGLE_SCORE } from "../actions/score_actions";

const scoreReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_SCORES:
      return action.scores;
    case RECEIVE_SINGLE_SCORE:
      let newState = state;
      return newState.push(action.score);
    default:
      return state;
  }
};

export default scoreReducer;
