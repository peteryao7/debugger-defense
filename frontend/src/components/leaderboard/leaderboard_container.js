import { connect } from 'react-redux'
import { fetchScores, fetchSingleScore } from "../../actions/score_actions";
import LeaderBoard from './leaderboard'

const mapStateToProps = (state) => {
    return {
        scores: state.scores,
        currentUsername: state.session.user.username
    };
};

const mapDispatchToProps = dispatch => {
    return { 
        fetchScores: () => dispatch(fetchScores()),
        fetchSingleScore: (username) => dispatch(fetchSingleScore(username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);