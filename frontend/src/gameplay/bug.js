// import Word from 'word';
import { getRandomWord } from "../user-input/user_input";

const bugImage = new Image();
bugImage.src = 'game/Bug_160.png'

class Bug {
    constructor(difficulty) {
        let xPos, yPos;

        if (Math.random() > .5) {
            xPos = 20;
            yPos = Math.random() * 600;
        } else {
            xPos = Math.random() * 1000;
            yPos = 20;
        }

        this.position = [xPos, yPos]
        this.speed = (Math.random() * 2000) + 100;
        this.radius = 45;
        this.xDiff = 1000 - this.position[0];
        this.yDiff = 600 - this.position[1];
        this.word = getRandomWord(difficulty);
        this.image = bugImage;
        this.timeDrawn = (new Date()).getTime();
        this.currentFrame = 0;
    }

    draw(ctx) {
        this.drawBug(ctx)
        this.drawWord(ctx)
    }

    drawBug(ctx) {
        if (this.currentFrame % 20 === 0) {
            ctx.drawImage(this.image, 0, 0, 160, 160, this.position[0], this.position[1], 90, 90);
            this.currentFrame += 1;
        } else {
            ctx.drawImage(this.image, 160, 0, 160, 160, this.position[0], this.position[1], 90, 90)
            this.currentFrame += 1;
        }
    }

    setUpdateInterval(ctx) {
        setInterval(() => this.updateFrame(ctx), 100)
    }

    drawWord(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "20px Comic Sans";
        ctx.fillText(this.word, this.position[0] + 35, this.position[1] + 20)
    }

    move() {
        this.position[0] += (this.xDiff - 90) / this.speed;
        this.position[1] += (this.yDiff - 90) / this.speed;
    }

}


export default Bug;