// import Word from 'word';

class Bug {
    constructor(difficulty) {
        // this.word = new Word(difficulty);
        let xPos, yPos;
        
        if (Math.random() > .5) {
            xPos = 0;
            yPos = Math.random();
        } else {
            xPos = Math.random();
            yPos = 0;
        }
        this.position = {
            xPos, yPos
        }
        this.speed = {
            dx: Math.random(),
            dy: Math.random(),
        } 
    }
}

export default Bug;