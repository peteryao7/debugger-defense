import { getRandomWord } from "../user-input/user_input";

const bugImage = new Image();
bugImage.src = "game/Bug_4_160.png";

class Bug {
  constructor(difficulty, gameStartTime) {
    let xPos, yPos;

    if (Math.random() > 0.5) {
      xPos = 5;
      yPos = Math.random() * (600 - 150);
    } else {
      xPos = Math.random() * (600 - 150);
      yPos = 5;
    }

    this.difficulty = difficulty;
    this.position = [xPos, yPos];
    this.speed = Math.random() * 2000 + 100;
    this.radius = 45;
    this.xDiff = 970 - this.position[0]; // destination position - bug's starting position
    this.yDiff = 570 - this.position[1];
    this.word = getRandomWord(difficulty);

    this.image = bugImage;
    this.frameWidth = 160;
    this.frameHeight = 160;
    this.gameStartTime = gameStartTime;
    this.elapsedTime = null;
  }

  draw(ctx) {
    this.drawBug(ctx);
    this.drawWord(ctx);
  }

  drawBug(ctx) {
    this.elapsedTime = Date.now() - this.gameStartTime;

    if (this.elapsedTime % 1000 <= 250) {
      ctx.drawImage(
        this.image,
        0,
        0,
        this.frameWidth,
        this.frameHeight,
        this.position[0],
        this.position[1],
        90,
        90
      );
    } else if (this.elapsedTime % 1000 <= 500) {
      ctx.drawImage(
        this.image,
        160,
        0,
        this.frameWidth,
        this.frameHeight,
        this.position[0],
        this.position[1],
        90,
        90
      );
    } else if (this.elapsedTime % 1000 <= 750) {
      ctx.drawImage(
        this.image,
        320,
        0,
        this.frameWidth,
        this.frameHeight,
        this.position[0],
        this.position[1],
        90,
        90
      );
    } else if (this.elapsedTime % 1000 <= 999) {
      ctx.drawImage(
        this.image,
        480,
        0,
        this.frameWidth,
        this.frameHeight,
        this.position[0],
        this.position[1],
        90,
        90
      );
    }
  }

  drawWord(ctx) {
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    const wordLength = ctx.measureText(this.word).width;

    // ctx.fillStyle = "#33ccff"; // background color of bug text

    if (this.position[0] >= 865 && wordLength >= 80) {
        // ctx.fillRect(this.position[0], this.position[1] - 12, 90, 30);
        ctx.fillStyle = "black";
        ctx.fillText(this.word, 905, this.position[1] + 15)
    }
    else {
        // ctx.fillRect(this.position[0], this.position[1] - 12, 90, 20);
        ctx.fillStyle = "black";
        ctx.fillText(this.word, this.position[0] + 45, this.position[1] + 15)
    }

    // if (this.position[0] >= 865 && wordLength >= 70) {
    //   ctx.fillRect(825, this.position[1] - 12, wordLength + 25, 20);
    //   ctx.fillStyle = "black";
    //   ctx.fillText(this.word, 905, this.position[1] + 5);
    // } else if (wordLength >= 70) {
    //   ctx.fillRect(this.position[0], this.position[1] - 12, 90, 30);
    //   ctx.fillStyle = "black";
    //   ctx.fillText(this.word, this.position[0] + 45, this.position[1] + 5);
    // } else {
    //   ctx.fillRect(this.position[0], this.position[1] - 12, 90, 30);
    //   ctx.fillStyle = "black";
    //   ctx.fillText(this.word, this.position[0] + 45, this.position[1] + 10);
    // }
    ctx.textAlign = "start";
  }

  move() {
    this.position[0] += (this.xDiff - 45) / this.speed; // 45 is half of size of bug
    this.position[1] += (this.yDiff - 45) / this.speed;
  }
}

export default Bug;
