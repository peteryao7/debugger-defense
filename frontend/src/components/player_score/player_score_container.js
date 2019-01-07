import { connect } from 'react-redux';
import { fetchSingleScore } from '../../actions/score_actions'
import PlayerScore from './player_score';

const mapStateToProps = (state) => {
  let currentUsername;
  if (state.session.user === undefined || Object.keys(state.session.user).length === 0) {
    currentUsername = "LazyGuest";
  } else {
    currentUsername = state.session.user.username;
  }
  return {
    
    currentUsername
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    fetchSingleScore: username => dispatch(fetchSingleScore(username)) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScore);