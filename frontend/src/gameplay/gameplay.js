import Bug from "./bug";
import Util from "./util";

const background = new Image();
background.src = '/game/circuitboard.png';

const destinationImage = new Image();
destinationImage.src = '/game/Prod_256.png';

class GamePlay {
  constructor(currentUsername, ctx, createScore) {
    this.currentUsername = currentUsername;
    this.ctx = ctx;
    this.destination = [970, 570];
    this.difficulty = 6;
    this.killCount = 100;
    this.lives = 20;
    this.score = 0;
    this.secondsElapsed = 0;
    this.startingTime = 0;
    this.background = background;
    this.destinationImage = destinationImage;

    this.startingTime = Date.now();
    this.elapsedTime = null;
    
    this.bugs = new Array(5).fill().map(el => new Bug(this.difficulty, this.startingTime));
    this.createScore = createScore;

    this.parse();
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

    if (this.lives > 0) {
      this.elapsedTime = Math.floor((Date.now() - this.startingTime) / 1000);

      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.gameOver();
      this.createScore({
        score: this.score,
        secondsElapsed: this.elapsedTime,
        username: this.currentUsername
      });
    }
  }

  gameOver() {
    this.ctx.fillStyle = "red";
    this.ctx.font = "100px 'Press Start 2P', cursive";
    this.ctx.fillText("GAME OVER", 50, 325);
  }

  step() {
    this.bugs.forEach(bug => {
      bug.move();
    });
  }

  detectCollision() {
    const bugCenter = new Array(2);
    this.bugs.forEach((bug, i) => {
      bugCenter[0] = bug.position[0] + 45;
      bugCenter[1] = bug.position[1] + 45;
      const distBetweenCenters = Util.distance(bugCenter, this.destination);
      if (distBetweenCenters < bug.radius) {
        this.bugs.splice(i, 1);
        this.lives -= 1;
      }
    });
  }

  detectFullSpelling() {
    if (this.bugs.length > 0) {
      this.bugs.forEach((bug, i) => {
        if (bug.word[bug.word.length - 1] === "_") {
          this.bugs.splice(i, 1);
          this.killCount += 1;
          this.score += 100 * this.difficulty;
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

  draw(ctx) {
    this.drawBackground(ctx);
    this.drawPlayerInfo(ctx);
    this.drawDestination(ctx);
    this.drawBugs(ctx);
  }

  drawBackground(ctx) {
    // ctx.fillStyle = "blue";
    ctx.drawImage(this.background, 0, 0, 1000, 600)
    // ctx.fillRect(0, 0, 1000, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 600, 1000, 630);
  }

  drawBugs(ctx) {
    this.bugs.forEach(bug => {
      bug.draw(ctx);
    });
  }

  drawDestination(ctx) {
    this.elapsedTime = Date.now() - this.startingTime;

    if (this.elapsedTime % 1000 < 500) {
      ctx.drawImage(this.destinationImage, 0, 0, 224, 224, 720, 385, 320, 320)
    } else {
      ctx.drawImage(this.destinationImage, 256, 0, 224, 224, 720, 385, 320, 320)
    }
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillStyle = "black";
    ctx.fillText("Production", 840, 545)
  }

  /*
    kill count
    seconds
    level


    score
    lives
  */
  drawPlayerInfo(ctx) {
    ctx.fillStyle = "black";
    ctx.font = "15px 'Press Start 2P', cursive";
    ctx.fillText(`Level: ${this.difficulty}`, 10, 622 );
    ctx.fillText(`Kills: ${this.killCount}`, 170, 622);
    ctx.fillText(`Time: ${this.elapsedTime}`, 350, 622);
    ctx.fillText(`Score: ${this.score}`, 600, 622);

    this.lives <= 5 ? ctx.fillStyle = "red" : ctx.fillStyle = "green"
    ctx.fillText(`Lives: ${this.lives}`, 850, 622);

  }
}

export default GamePlay;
