import * as ScoreApiUtil from "../util/score_api_util";

export const RECEIVE_SCORES = "RECEIVE_SCORES";
export const RECEIVE_SINGLE_SCORE = "RECEIVE_SINGLE_SCORE";
// export const RECEIVE_HIGHEST_SCORE = "RECEIVE_HIGHEST_SCORE";

export const receiveScores = scores => ({
  type: RECEIVE_SCORES,
  scores
});

export const receiveSingleScore = score => ({
  type: RECEIVE_SINGLE_SCORE,
  score
});

// export const receiveHighestScore = score => ({
//   type: RECEIVE_HIGHEST_SCORE,
//   score
// })

export const fetchScores = () => dispatch =>
  ScoreApiUtil.fetchScores()
    .then(scores => dispatch(receiveScores(scores.data.scores)))
    .catch(err => console.log(err));

export const fetchSingleScore = username => dispatch =>
  ScoreApiUtil.fetchSingleScore(username)
    .then(score => dispatch(receiveSingleScore(score.data.score)))
    .catch(err => console.log(err));

// export const fetchHighestScore = username => dispatch =>
//   ScoreApiUtil.fetchSingleScore(username)
//     .then(score => dispatch(receiveSingleScore(score.data.score)))
//     .catch(err => console.log(err));

export const createScore = data => dispatch => 
  ScoreApiUtil.createScore(data)
    .then(score => dispatch(receiveSingleScore(score.data)))
    .catch(err => console.log(err));