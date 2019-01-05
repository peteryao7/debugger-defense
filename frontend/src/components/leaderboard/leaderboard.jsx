import React from 'react';

class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        //fetch scores from all users (if we want scroll) otherwise top 10-50
    }

    componentDidUpdate() {
        //update for player's current score
    }

    render() {
        //iterate through all player scores to render
        //currently dummy info
        return (
            <div>
                <li>LazyGuest: 10000</li>
                <li>BugSquasher: 9999</li>
                <li>SickKid: 10</li>
            </div>
        )
    }
}

export default LeaderBoard;