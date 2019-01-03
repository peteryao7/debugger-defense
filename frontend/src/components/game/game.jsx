import React from 'react';

class Game extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // requestAnimationFrame(initializeGame)
        //takes another func as an arg--nice for game loops
    }

    initializeGame() {
        //new Game;
    }

    render() {
        return (
             < div >
                <canvas ref="canvas" width={640} height={425} />
            </div >
        )
    }
}

export default Game;
