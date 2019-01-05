import React from 'react';

class PlayerScore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    
    componentDidMount() {
        console.log(this.props.currentUser.id)
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