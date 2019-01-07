import { connect } from 'react-redux'
import { createScore } from "../../actions/score_actions";
import Game from './game';

const mapStateToProps = state => {
  let currentUsername;
    if (state.session.user === undefined || Object.keys(state.session.user).length === 0) {
      currentUsername = "LazyGuest";
    } else {
      currentUsername = state.session.user.username
    }
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