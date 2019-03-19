import React from 'react';
import GamePlay from "../../gameplay/gameplay";
import Splashscreen from "./splashscreen";
import PlayerScoreContainer from "../player_score/player_score_container"

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: false
        }

        this.startPlaying = this.startPlaying.bind(this);
        this.initializeGame = this.initializeGame.bind(this);
        this.muteSound = this.muteSound.bind(this);
    }

    initializeGame() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        if (this.newGame) {
            this.newGame.gameOver();
            this.playing = false;
        }
        this.newGame = new GamePlay(this.props.currentUsername, ctx, this.props.createScore);
    }

    muteSound() {
        if (this.newGame.muted && this.newGame.lives > 0) {
            this.newGame.muted = false;
            this.newGame.audio.play();
        } else if (!this.newGame.muted && this.newGame.lives > 0) {
            this.newGame.muted = true;
            this.newGame.audio.pause();
        }
    }

    startPlaying() {
        this.setState({ playing: true })
    }

    render() {
        if (this.state.playing) {
            requestAnimationFrame(this.initializeGame)
            return (
                <div className="canvas-restart-container">
                    <canvas ref="canvas" width={1000} height={630} />
                    
                    <div className="game-footer">
                        <div className="restart-button" onClick={this.initializeGame}>
                            <div>Restart</div>
                        </div>
                        <div className="mute-button" onClick={this.muteSound}>Mute</div>
                        <PlayerScoreContainer />
                    </div>
                    
                </div >
            )
        } else {
            return (
                <Splashscreen startPlaying={this.startPlaying}/>
            )
        }

    }
}

export default Game;
