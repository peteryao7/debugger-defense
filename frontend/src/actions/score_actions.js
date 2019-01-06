import { fetchScores, fetchSingleScore, createScore } from "../util/score_api_util";

export const RECEIVE_SCORES = "RECEIVE_SCORES";
export const RECEIVE_SINGLE_SCORE = "RECEIVE_SINGLE_SCORE";

export const receiveScores = scores => ({
  type: RECEIVE_SCORES,
  scores
});

export const receiveSingleScore = score => ({
  type: RECEIVE_SINGLE_SCORE,
  score
});

export const fetchScores = () => dispatch =>
  fetchScores()
    .then(scores => dispatch(receiveScores(scores)))
    .catch(err => console.log(err));

export const fetchSingleScore = username => dispatch =>
  fetchSingleScore(username)
    .then(score => dispatch(receiveSingleScore(score)))
    .catch(err => console.log(err));

export const createScore = data => dispatch =>
  createScore(data)
    .then(score => dispatch(receiveSingleScore(score)))
    .catch(err => console.log(err));
