import { RECEIVE_SCORES, RECEIVE_SINGLE_SCORE } from "../actions/score_actions";

const scoreReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SCORES:
      return action.scores;
    case RECEIVE_SINGLE_SCORE:
      return Object.assign({}, state, action.score);
    default:
      return state;
  }
};

export default scoreReducer;
