import React from 'react';

class PlayerScore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    
    componentDidMount() {
        this.props.fetchSingleScore(this.props.currentUsername);
    }

    componentDidUpdate() {
        //update if the player's current score is greater than their highest score?
    }
    
    render() {
        return (
            <div>Player's High Score: 10000 </div>
        )
    }
}

export default PlayerScore;