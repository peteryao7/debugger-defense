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
                    console.log(this.bugs);
                }
            }
        });
    };

    // parse() {
    //     // const bugs = ["cat", "dog", "lizard", "elephant", "car"];
    //     window.addEventListener("keydown", event => {
    //         for (let i = 0; i < this.bugs.length; i++) {
    //             for (let j = 0; j < this.bugs.word[i].length; j++) {
    //                 if (this.bugs.word[i].charAt(j) === "$") {
    //                     continue;
    //                 } else if (event.key === this.bugs.word[i].charAt(j)) {
    //                     this.bugs.word[i] = this.bugs.word[i].replace(this.bugs.word[i].charAt(j), "$");
    //                 } else {
    //                     break;
    //                 }
    //                 console.log(this.bugs);
    //             }
    //         }
    //     });
    // };

    animate() {
        this.detectCollision()
        this.detectFullSpelling();
        this.draw(this.ctx);
        this.step()
        
        // randomly adds bugs
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

    detectFullSpelling() {
        this.bugs.forEach((bug, i) => {
            if (bug.word[bug.word.length - 1] === "$") {
                this.bugs.splice(i, 1)
            }
        })
    };

    moreBugs() {
        this.bugs.push(new Bug(this.difficulty))
    }

    draw(ctx) {
        //canvas background
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 1000, 600);

        //destination circle
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(
            this.destination[0], this.destination[1], 20, 0, 2 * Math.PI, true
        );
        ctx.fill();
        
        //draws bugs
        this.bugs.forEach((bug) => {
            bug.draw(ctx);
        });
        // if (this.bugs.length > 0) {
        //     // draw a bug!
        // }
    }

}

export default GamePlay;