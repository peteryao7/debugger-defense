import Bug from './bug';
import Util from "./util";

//needs to be passed the context from "../components/game", right?

class GamePlay {
    constructor (currentUsername, ctx, createScore) {
        // debugger;
        this.currentUsername = currentUsername;
        this.ctx = ctx;
        this.destination = [970, 570]
        this.difficulty = 1;
        this.killCount = 0
        this.lives = 1;
        this.bugs = new Array(5).fill().map( el => (
            new Bug(this.difficulty)
        ))
        this.score = 0;

        this.createScore = createScore;

        this.parse();
        this.animate();
    }


    parse() {
        window.addEventListener("keydown", event => {
            for (let i = 0; i < this.bugs.length; i++) {
                for (let j = 0; j < this.bugs[i].word.length; j++) {
                    if (this.bugs[i].word.charAt(j) === "$") {
                        continue;
                    } else if (event.key === this.bugs[i].word.charAt(j)) {
                        this.bugs[i].word = this.bugs[i].word.replace(this.bugs[i].word.charAt(j), "$");
                    } else {
                        break;
                    }
                }
            }
        });
    };

    animate() {
        this.detectCollision()
        this.detectFullSpelling();
        this.incrementDifficulty();
        this.draw(this.ctx);
        this.step()
        
        // randomly adds bugs
        let x = Math.random()
        if (x < .02 && this.bugs.length < 20) {
            this.moreBugs()
        }

        if (this.lives > 0) {
            requestAnimationFrame(this.animate.bind(this));
        } else {
            this.gameOver();
            this.createScore({score: this.score, secondsElapsed: 10, username: this.currentUsername});
        }
    }

    gameOver() {
        this.ctx.fillStyle = "red";
        this.ctx.font = "100px Comic Sans";
        this.ctx.fillText("GAME OVER", 200, 325)
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
                this.lives -= 1;
            }
        })
    }

    detectFullSpelling() {
        if (this.bugs.length > 0) {
            this.bugs.forEach((bug, i) => {
                if (bug.word[bug.word.length - 1] === "$") {
                    this.bugs.splice(i, 1)
                    this.killCount += 1;
                    this.score += 100 * this.difficulty
                }
            })
        }
    };

    incrementDifficulty() {
        if (this.killCount === 5) {
            this.difficulty = 2;
        } else if (this.killCount >= 10) {
            this.difficulty = 3;
        } else if (this.killCount >= 15) {
            this.difficulty = 4;
        } else if (this.killCount >= 20) {
            this.difficulty = 5;
        } else if (this.killCount >= 100) {
            this.difficulty = 6;
        } else if (this.killCount >= 120) {
            this.difficulty = 7;
        } else if (this.killCount >= 140) {
            this.difficulty = 8;
        } else if (this.killCount >= 160) {
            this.difficulty = 9;
        } else if (this.killCount >= 180) {
            this.difficulty = 10;
        }
    }

    moreBugs() {
        this.bugs.push(new Bug(this.difficulty))
    }

    draw(ctx) {
        this.drawBackground(ctx);
        this.drawKillCount(ctx);
        this.drawDestination(ctx);
        this.drawBugs(ctx);
    }

    drawBackground(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 1000, 600);
    }

    drawBugs(ctx) {
        this.bugs.forEach((bug) => {
            bug.draw(ctx);
        });
    }

    drawDestination(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(
            this.destination[0], this.destination[1], 20, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    drawKillCount(ctx) {
        ctx.fillStyle = "white";
        ctx.font = "20px Comic Sans";
        ctx.fillText(`Score: ${this.score}, Kill count: ${this.killCount} Level: ${this.difficulty} Lives: ${this.lives}`, 200, 200)
    }

}

export default GamePlay;