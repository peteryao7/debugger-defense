import React from 'react';

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        //fetch scores from all users (if we want scroll) otherwise top 10-50
        this.props.fetchScores();
    }

    formatScores() {
        const formatted = this.props.scores.map(score => {
            return (<li key={score.date} className="leaderboard-single-score">{score.username}: {score.score}, {score.secondsElapsed} seconds</li>)
        }
        )
        return formatted;
    }

    render() {
        if (this.props.scores.length === 0) {
            return (
                <div className="leaderboard-inner-div">
                    <h5>Leaderboard</h5>
                    <ul className="leaderboard-score-list"></ul>
                </div>
            );
        }

        return (
            <div className="leaderboard-container">
                <h5>Leaderboard</h5>
                <ul className="leaderboard-score-list">{this.formatScores()}</ul>
            </div>
        )
    }
}

export default LeaderBoard;