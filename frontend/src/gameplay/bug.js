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
    this.speed = Math.random() * (200 - 500) + 500;
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

  drawWordBackground(ctx, wordLength) {
    let rectX = 0;
    let rectY = this.position[1] - 20;
    let rectWidth = 0;
    let rectHeight = 43;
    let cornerRadius = 20;
    ctx.lineJoin = "round";

    ctx.fillStyle = "white"; // background color of bug text

    if (wordLength <= 70) {
      rectX = this.position[0] - 5;
      rectWidth = 100;
    } else if (wordLength <= 90) {
      rectX = this.position[0] - 15;
      rectWidth = 120;
    } else if (wordLength <= 110) {
      rectX = this.position[0] - 25;
      rectWidth = 140;
    } else if (wordLength <= 130) {
      rectX = this.position[0] - 35;
      rectWidth = 160;
    } else if (wordLength <= 150) {
      rectX = this.position[0] - 45;
      rectWidth = 180;
    } else if (wordLength <= 170) {
      rectX = this.position[0] - 55;
      rectWidth = 200;
    } else if (wordLength <= 190) {
      rectX = this.position[0] - 65;
      rectWidth = 220;
    } else if (wordLength <= 210) {
      rectX = this.position[0] - 75;
      rectWidth = 240;
    } else if (wordLength <= 230) {
      rectX = this.position[0] - 85;
      rectWidth = 260;
    }

    ctx.strokeRect(
      rectX + cornerRadius / 2,
      rectY + cornerRadius / 2,
      rectWidth - cornerRadius,
      rectHeight - cornerRadius
    );
    ctx.fillRect(
      rectX + cornerRadius / 2,
      rectY + cornerRadius / 2,
      rectWidth - cornerRadius,
      rectHeight - cornerRadius
    );
  }

  drawWord(ctx) {
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    const wordLength = ctx.measureText(this.word).width;

    this.drawWordBackground(ctx, wordLength);

    ctx.fillStyle = "black";
    ctx.fillText(this.word, this.position[0] + 45, this.position[1] + 8);
    ctx.textAlign = "start";
  }

  move() {
    this.position[0] += (this.xDiff - 45) / this.speed; // 45 is half of size of bug
    this.position[1] += (this.yDiff - 45) / this.speed;
  }
}

export default Bug;
