import { getRandomWord } from "../user-input/user_input";

const duckImage = new Image();
duckImage.src = "game/Duck_160.png";

class Duck {
  constructor(startTime) {
    let xPos, yPos;

    if (Math.random() > 0.5) {
      xPos = 5;
      yPos = Math.random() * (600 - 150);
    } else {
      xPos = Math.random() * (600 - 150);
      yPos = 5;
    }

    this.word = getRandomWord(10);
    this.position = [xPos, yPos];
    this.speed = Math.random() * (250 - 150) + 150;
    this.radius = 45;
    this.xDiff = 970 - this.position[0]; // destination position - bug's starting position
    this.yDiff = 570 - this.position[1];
    this.gameStartTime = startTime;

    this.image = duckImage;
    this.frameWidth = 160;
    this.frameHeight = 160;
  }

  draw(ctx) {
    this.drawDuck(ctx);
    this.drawWord(ctx);
  }

  drawDuck(ctx) {
    const elapsedTime = Date.now() - this.gameStartTime;

    if (elapsedTime % 1000 <= 500) {

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
    } else if (elapsedTime % 1000 <= 999) {
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

    rectX = this.position[0] - 85;
    rectWidth = 260;

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

export default Duck;