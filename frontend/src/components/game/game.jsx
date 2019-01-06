import React from 'react';
import GamePlay from "../../gameplay/gameplay";

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.initializeGame = this.initializeGame.bind(this)
    }

    componentDidMount() {
        requestAnimationFrame(this.initializeGame)
    }

    initializeGame() {
        const player = {
            username: "LazyGuest"
        }

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        new GamePlay(player, ctx)
    }

    render() {
        return (
             <div className="canvas-restart-container">
                <canvas ref="canvas" width={1000} height={600} />
                <button onClick={this.initializeGame}>Restart</button>
            </div >
        )
    }
}

export default Game;
