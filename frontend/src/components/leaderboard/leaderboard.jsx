import React from 'react';

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        //fetch scores from all users (if we want scroll) otherwise top 10-50
        // debugger;
        this.props.fetchScores();
    }

    // componentDidUpdate() {
    //     //update for player's current score
    //     this.props.fetchScores();
    // }

    formatScores() {
        debugger;
        const formatted = this.props.scores.map ( score =>
            {
                return (<li key={score._id}>{score.username}: {score.score}</li>)
            }
        )
        return formatted;
    }

    render() {
        //iterate through all player scores to render
        //currently dummy info
        // debugger;
        if (this.props.scores.length === 0) {
            return null;
        }
        
        return (
            <div>
                <h5>Leaderboard</h5>
                <ul>{this.formatScores()}</ul>
            </div>
        )
    }
}

export default LeaderBoard;