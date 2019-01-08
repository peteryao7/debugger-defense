import React from 'react';

class PlayerScore extends React.Component {
    render() {
        if (this.props.currentUsername === "LazyGuest") {
          return <div>Log in to see your name on the leaderboard!</div>;
        } else if (!this.props.highestScore) {
            return <div>Play more to get a high score!</div>
        } else {
            return <div>{this.props.currentUsername}'s High Score: {this.props.highestScore.score} </div>
        }
    }
}

export default PlayerScore;