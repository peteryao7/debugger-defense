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
        this.radius = 20;
        this.xDiff = 1000 - this.position[0];
        this.yDiff = 600 - this.position[1];
        this.word = getRandomWord(difficulty);
        this.image = bugImage;

    }

    draw(ctx) {
        this.drawBug(ctx)
        this.drawWord(ctx)
    }

    updateFrame(ctx) {
        ctx.drawImage(this.image, 160, 0, 160, 160, this.position[0], this.position[1], 90, 90)
    }

    drawBug(ctx) {
        ctx.drawImage(this.image, 0, 0, 160, 160, this.position[0], this.position[1], 90, 90);
        // setInterval(() => this.updateFrame(ctx), 100)
        //setinterval not working for anim currently
    }

    drawWord(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "20px Comic Sans";
        ctx.fillText(this.word, this.position[0] + 35, this.position[1] + 20)
    }

    move() {
        this.position[0] += this.xDiff / this.speed;
        this.position[1] += this.yDiff / this.speed;
    }

}


export default Bug;