// import Word from 'word';
// import { getRandomWord } from ../user-input/user_input";

class Bug {
    constructor(difficulty) {
        // this.word = new Word(difficulty);
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
        this.color = "yellow";
        this.radius = 20;
        this.xDiff = 1000 - this.position[0];
        this.yDiff = 600 - this.position[1];

        // this.word = getWordFromDictionary(difficulty)
        this.word = "amazing!";
    }

    draw(ctx) {
        this.drawBug(ctx)
        this.drawWord(ctx)
    }

    drawBug(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    drawWord(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "20px Comic Sans";
        ctx.fillText(this.word, this.position[0] - 10, this.position[1])
    }

    move() {
        this.position[0] += this.xDiff / this.speed;
        this.position[1] += this.yDiff / this.speed;
    }

}

export default Bug;