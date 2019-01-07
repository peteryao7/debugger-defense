import React from 'react';

class PlayerScore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        debugger;
        this.props.fetchSingleScore(this.props.currentUsername);
    }

    componentDidUpdate() {
        //update if the player's current score is greater than their highest score?
    }

    render() {
        if (!this.props.highestScore) {
            return <div>Play more to get a high score!</div>
        } else {
            return <div>{this.props.currentUsername}'s High Score: {this.props.highestScore.score} </div>
        }
    }
}

export default PlayerScore;