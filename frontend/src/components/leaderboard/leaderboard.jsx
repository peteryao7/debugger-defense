import React from 'react';
import FooterContainer from "../footer/footer_container";

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchScores();
    }

    counterColor(num) {
        if (num === 1) {
            return <div className="first-place">
                {num}
            </div>
        } else if (num === 2) {
            return <div className="second-place">
                {num}
            </div>
        } else if (num === 3) {
            return <div className="third-place">{num}</div>;
        }
        else return <div>{num}</div>
    }

    formatScores() {
        let counter = 0;
        const formatted = this.props.scores.map(score => {
            counter += 1;
            return (<li key={score.date} className="leaderboard-single-score">
                <div className="place-number">{this.counterColor(counter)}</div>
                <div className="score-info">
                    <div className="single-score-username">{score.username} </div>
                    <div className="single-score-score">  {score.score.toLocaleString()} points</div>
                    <div className="single-score-time"> {score.secondsElapsed.toLocaleString()} seconds</div>
                    <div />
                </div></li>)
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
            <div>
                <div className="leaderboard-container">
                    <h5>Leaderboard</h5>
                    <ul className="leaderboard-score-list">{this.formatScores()}</ul>
                </div>
                <FooterContainer />
            </div>
        )
    }
}

export default LeaderBoard;