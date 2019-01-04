import Bug from './bug';
import Util from "./util";

//needs to be passed the context from "../components/game", right?

class GamePlay {
    constructor (player, ctx) {
        this.player = player;
        this.ctx = ctx;
        this.destination = [970, 570]
        this.difficulty = 1;
        // this.bugs = [new Bug(this.difficulty)];
        this.bugs = new Array(5).fill().map( el => (
            new Bug(this.difficulty)
        ))

        this.animate();
    }

    animate() {
        this.detectCollision()
        this.draw(this.ctx);
        this.step()
        let x = Math.random()
        if (x < .02 && this.bugs.length < 20) {
            this.moreBugs()
        }
        requestAnimationFrame(this.animate.bind(this));
    }

    step() {
        this.bugs.forEach( bug => {
            bug.move()
        })
    }

    detectCollision() {
        this.bugs.forEach( (bug, i) => {
            const distBetweenCenters = Util.distance(bug.position, this.destination)
            if (distBetweenCenters < bug.radius + 20) {
                this.bugs.splice(i, 1)
            }
        })
    }

    moreBugs() {
        this.bugs.push(new Bug(this.difficulty))
    }

    draw(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 1000, 600);

        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(
            this.destination[0], this.destination[1], 20, 0, 2 * Math.PI, true
        );
        ctx.fill();
        
        this.bugs.forEach((bug) => {
            bug.draw(ctx);
        });
        // if (this.bugs.length > 0) {
        //     // draw a bug!
        // }
    }

}

export default GamePlay;