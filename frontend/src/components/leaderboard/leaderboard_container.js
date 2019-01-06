import { connect } from 'react-redux'
import { fetchScores, fetchSingleScore } from "../../actions/score_actions";
import LeaderBoard from './leaderboard'

const mapStateToProps = (state) => {
    let currentUsername;
    if (state.session.user == undefined || Object.keys(state.session.user).length === 0) {
      currentUsername = "LazyGuest";
    } else {
      currentUsername = state.session.user.username;
    }
    return {
        scores: state.scores,
        currentUsername
    };
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchScores: () => dispatch(fetchScores()),
        fetchSingleScore: (username) => dispatch(fetchSingleScore(username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);