import Bug from "./bug";
import Duck from "./duck";
import Util from "./util";
import Explosion from './explosion';

const background = new Image();
background.src = '/game/circuitboard.png';

const destinationImage = new Image();
destinationImage.src = '/game/Prod_256.png';

class GamePlay {
  constructor(currentUsername, ctx, createScore) {
    this.currentUsername = currentUsername;
    this.ctx = ctx;
    this.destination = [970, 570];
    this.difficulty = 1;
    this.killCount = 0;
    this.lives = 100;
    this.score = 0;
    this.secondsElapsed = 0;
    this.startingTime = 0;
    this.background = background;
    this.destinationImage = destinationImage;

    this.startingTime = Date.now();
    this.elapsedTime = null;

    this.bugs = new Array(5).fill().map(el => new Bug(this.difficulty, this.startingTime));
    this.ducks = [];
    this.unkilledBugs = [];
    this.deaths = [];
    this.createScore = createScore;

    this.audio = new Audio('the_chase.mp3');
    this.audio.loop = true;
    this.audio.volume = 0.5;
    this.audio.play();

    this.parse();
    this.duckParse();
    this.animate();
  }

  parse() {
    window.addEventListener("keydown", event => {
      for (let i = 0; i < this.bugs.length; i++) {
        for (let j = 0; j < this.bugs[i].word.length; j++) {
          if (this.bugs[i].word.charAt(j) === "_") {
            continue;
          } else if (event.key === this.bugs[i].word.charAt(j)) {
            this.bugs[i].word = this.bugs[i].word.replace(
              this.bugs[i].word.charAt(j),
              "_"
            );
            break;
          } else {
            break;
          }
        }
      }
    });
  }

  duckParse() {
    window.addEventListener("keydown", event => {
      for (let i = 0; i < this.ducks.length; i++) {
        for (let j = 0; j < this.ducks[i].word.length; j++) {
          if (this.ducks[i].word.charAt(j) === "_") {
            continue;
          } else if (event.key === this.ducks[i].word.charAt(j)) {
            this.ducks[i].word = this.ducks[i].word.replace(
              this.ducks[i].word.charAt(j),
              "_"
            );
            break;
          } else {
            break;
          }
        }
      }
    });
  }

  animate() {
    this.detectCollision();
    this.detectFullSpelling();
    this.incrementDifficulty();
    this.draw(this.ctx);
    this.step();

    // randomly adds bugs
    let x = Math.random();
    if (x < 0.02 && this.bugs.length < 20) {
      this.moreBugs();
    }

    //randomly add ducks
    let duckChance = Math.random();
    if (duckChance < 0.001) {
      this.moreDucks();
    }

    if (this.lives > 0) {
      this.elapsedTime = Math.floor((Date.now() - this.startingTime) / 1000);
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.gameOver();
      this.createScore({
        score: this.score,
        secondsElapsed: Math.floor((Date.now() - this.startingTime) / 1000),
        username: this.currentUsername
      });
    }
  }

  gameOver() {
    this.audio.pause();
    this.audio.currentTime = 0;

    this.ctx.font = "100px 'Press Start 2P', cursive";
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(50, 50, 900, 500);
    this.ctx.fillStyle = "red";
    this.ctx.fillText("GAME OVER", 55, 200);
    this.ctx.font = "30px 'Press Start 2P', cursive";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Words missed:", 325, 250);
    this.ctx.font = "10px 'Press Start 2P', cursive";

    let xVal = 97;
    let yVal = 250;

    for (let i = 0; i < this.unkilledBugs.length; i++) {
      if (i % 5 === 0) {
        yVal += 50;
      }

      if (i % 5 === 0) {
        xVal = 97;
      }
      this.ctx.fillText(this.unkilledBugs[i].originalWord, xVal, yVal);
      xVal += 175;
    }

    this.ctx.fillStyle = "red";
    this.ctx.font = "20px 'Press Start 2P', cursive";
    this.ctx.fillText("Your score has been submitted!", 200, 510);
  }

  step() {
    this.bugs.forEach(bug => {
      bug.move();
    });

    this.ducks.forEach(duck => {
      duck.move();
    })

    this.deaths.forEach((death, i) => {
      if (death.doneExploding) {
        this.deaths.splice(i, 1);
      }
    });
  }

  detectCollision() {
    const bugCenter = new Array(2);
    this.bugs.forEach((bug, i) => {
      bugCenter[0] = bug.position[0] + 45;
      bugCenter[1] = bug.position[1] + 45;
      const distBetweenCenters = Util.distance(bugCenter, this.destination);
      if (distBetweenCenters < bug.radius) {
        this.unkilledBugs.push(this.bugs.splice(i, 1)[0]);
        this.lives -= 5;
      }
    });

    const duckCenter = new Array(2)
    this.ducks.forEach((duck, i) => {
      duckCenter[0] = duck.position[0] + 45;
      duckCenter[1] = duck.position[1] + 45;
      const distBetweenCenters = Util.distance(duckCenter, this.destination);
      if (distBetweenCenters < duck.radius) {
        this.ducks.splice(i, 1);
      }
    })
  }

  detectFullSpelling() {
    let snd = new Audio("bug_death_laser.mp3");
    if (this.bugs.length > 0) {
      this.bugs.forEach((bug, i) => {
        if (bug.word[bug.word.length - 1] === "_") {
          this.deaths.push(new Explosion(bug.position));
          this.bugs.splice(i, 1);
          this.killCount += 1;
          this.score += 100 * this.difficulty;
          snd.play();
        }
      });
    }

    if (this.ducks.length > 0) {
      this.ducks.forEach((duck, i) => {
        if (duck.word[duck.word.length - 1] === "_") {
          this.deaths.push(new Explosion(duck.position))
          this.ducks.splice(i, 1);

          this.bugs.forEach(bug => {
            this.deaths.push(new Explosion(bug.position))
          })

          this.bugs = []
        }
      });
    }

  }

  incrementDifficulty() {
    if (this.killCount >= 160) {
      this.difficulty = 10;
    } else if (this.killCount >= 140) {
      this.difficulty = 9;
    } else if (this.killCount >= 120) {
      this.difficulty = 8;
    } else if (this.killCount >= 100) {
      this.difficulty = 7;
    } else if (this.killCount >= 80) {
      this.difficulty = 6;
    } else if (this.killCount >= 60) {
      this.difficulty = 4;
    } else if (this.killCount >= 40) {
      this.difficulty = 3;
    } else if (this.killCount > 20) {
      this.difficulty = 2;
    } else if (this.killCount <= 20) {
      this.difficulty = 1;
    }
  }

  moreBugs() {
    this.bugs.push(new Bug(this.difficulty, this.startingTime));
  }

  moreDucks() {
    this.ducks.push(new Duck(this.startingTime))
  }

  draw(ctx) {
    this.drawBackground(ctx);
    this.drawPlayerInfo(ctx);
    this.drawDestination(ctx);
    this.drawBugs(ctx);
    this.drawDucks(ctx)
    this.drawDeath(ctx);
  }

  drawBackground(ctx) {
    ctx.drawImage(this.background, 0, 0, 1000, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 600, 1000, 630);
  }

  drawBugs(ctx) {
    this.bugs.forEach(bug => {
      bug.draw(ctx);
    });
  }

  drawDucks(ctx) {
    this.ducks.forEach(duck => {
      duck.draw(ctx)
    })
  }

  drawDeath(ctx) {
    this.deaths.forEach(death => {
      debugger;
      death.draw(ctx);
    });
  }

  drawDestination(ctx) {
    const elapsedTime = Date.now() - this.startingTime;

    if (elapsedTime % 1000 < 500) {
      ctx.drawImage(this.destinationImage, 0, 0, 224, 224, 720, 385, 320, 320);
    } else {
      ctx.drawImage(
        this.destinationImage,
        256,
        0,
        224,
        224,
        720,
        385,
        320,
        320
      );
    }
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillStyle = "black";
    ctx.fillText("Production", 840, 545);
  }

  drawPlayerInfo(ctx) {
    ctx.fillStyle = "black";
    ctx.font = "15px 'Press Start 2P', cursive";
    ctx.fillText(`Level: ${this.difficulty}`, 10, 622);
    ctx.fillText(`Kills: ${this.killCount}`, 170, 622);
    ctx.fillText(`Time: ${this.elapsedTime}`, 350, 622);
    ctx.fillText(`Score: ${this.score}`, 600, 622);

    this.lives <= 25 ? (ctx.fillStyle = "red") : (ctx.fillStyle = "green");
    ctx.fillText(`Health: ${this.lives}`, 830, 622);
  }
}



export default GamePlay;
