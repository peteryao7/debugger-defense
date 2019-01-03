import Bug from './bug'

class GamePlay {
    constructor (player) {
        this.difficulty = 1;
        this.bugs = new Array(10).fill(new Bug(this.difficulty));
    }

}

export default GamePlay;