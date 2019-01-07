import { connect } from 'react-redux';
import { fetchSingleScore } from '../../actions/score_actions'
import PlayerScore from './player_score';

function compare(a, b) {
  if (a.score < b.score)
    return 1;
  if (a.score > b.score)
    return -1;
  return 0;
}

const mapStateToProps = (state) => {
  let currentUsername;
  if (state.session.user === undefined || Object.keys(state.session.user).length === 0) {
    currentUsername = "LazyGuest";
  } else {
    currentUsername = state.session.user.username;
  }

  const highestScore = state.scores.filter(score => score.username === currentUsername).sort(compare)[0]

  return {
    currentUsername,
    highestScore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleScore: username => dispatch(fetchSingleScore(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScore);