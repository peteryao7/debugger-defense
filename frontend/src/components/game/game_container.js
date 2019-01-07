import { connect } from 'react-redux'
import { createScore } from "../../actions/score_actions";
import Game from './game';

const mapStateToProps = state => {
  let currentUsername;
<<<<<<< HEAD
    if (state.session.user === undefined || Object.keys(state.session.user).length === 0) {
      currentUsername = "LazyGuest";
    } else {
      currentUsername = state.session.user.username
    }
=======
  if (state.session.user === undefined || Object.keys(state.session.user).length === 0) {
    currentUsername = "LazyGuest";
  } else {
    currentUsername = state.session.user.username
  }
>>>>>>> 0c2042907d9cc3901deb46f98e7061fbe2fd16b3
  return {
    currentUsername
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createScore: (data) => dispatch(createScore(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);