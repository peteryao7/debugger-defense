import { connect } from 'react-redux'
import { createScore } from "../../actions/score_actions";
import Game from './game'

const mapDispatchToProps = dispatch => {
    return {
        createScore: (data) => dispatch(createScore(data))
    };
};

export default connect(null, mapDispatchToProps)(Game);