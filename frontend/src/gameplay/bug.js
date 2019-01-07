// import Word from 'word';
import { getRandomWord } from "../user-input/user_input";

const bugImage = new Image();
bugImage.src = 'game/Bug_4_160.png'

class Bug {
    constructor(difficulty, gameStartTime) {
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
        this.frameWidth = 160;
        this.frameHeight = 160;
        this.gameStartTime = gameStartTime;
        this.elapsedTime = null;
    }

    draw(ctx) {
        this.drawBug(ctx)
        this.drawWord(ctx)
    }

    drawBug(ctx) {
        // ctx.drawImage(this.image, this.shift, 0, this.frameWidth, this.frameHeight, this.position[0], this.position[1], 90, 90)

        // if ( (this.getTime - this.gameStartTime) % 1000 <= 250) {
        //     this.shift += this.frameWidth + 1;
        //     ctx.drawImage(this.image, this.shift, 0, this.frameWidth, this.frameHeight, this.position[0], this.position[1], 90, 90)
        // }
        
        // if (this.currentFrame === this.totalFrames) {
        //     this.shift = 0;
        //     this.currentFrame = 0;
        // }
        // this.currentFrame += 1;
        this.elapsedTime = Date.now() - this.gameStartTime;

        if ((this.elapsedTime % 1000) <= 250) {
            ctx.drawImage(this.image, 0, 0, this.frameWidth, this.frameHeight, this.position[0], this.position[1], 90, 90)
        } else if ((this.elapsedTime % 1000) <= 500) {
            ctx.drawImage(this.image, 160, 0, this.frameWidth, this.frameHeight, this.position[0], this.position[1], 90, 90)
        } else if ((this.elapsedTime % 1000 )<= 750) {
            ctx.drawImage(this.image, 320, 0, this.frameWidth, this.frameHeight, this.position[0], this.position[1], 90, 90)
        } else if ((this.elapsedTime % 1000) <= 999 ){
            ctx.drawImage(this.image, 480, 0, this.frameWidth, this.frameHeight, this.position[0], this.position[1], 90, 90)
        }
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