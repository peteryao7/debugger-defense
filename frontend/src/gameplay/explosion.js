
const explosion = new Image();
explosion.src = '/game/explosion.png'

class Explosion {
    constructor(position) {
        this.startTime = Date.now();
        this.elapsedTime = null;
        this.position = position;
        this.doneExploding = false;
        this.explosion = explosion;
    }

    draw(ctx) {
        const elapsedTime = Date.now() - this.startTime;
        if ((elapsedTime) > 500) {
            this.doneExploding = true;
        }

        // hardcoded position of explosion relative to bug's position
        // don't really know why position - 30 words, but it does
        if (elapsedTime < 125) {
            ctx.drawImage(
                this.explosion, 0, 0, 160, 160, this.position[0] - 30, this.position[1] - 30, 160, 160
            );
        } else if (elapsedTime < 250) {
            ctx.drawImage(
                this.explosion, 160, 0, 160, 160, this.position[0] - 30, this.position[1] - 30, 160, 160
            );
        } else if (elapsedTime < 375) {
            ctx.drawImage(
                this.explosion, 320, 0, 160, 160, this.position[0] - 30, this.position[1] - 30, 160, 160
            );
        } else if (elapsedTime < 500) {
            ctx.drawImage(
                this.explosion, 580, 0, 160, 160, this.position[0] - 30, this.position[1] - 30, 160, 160
            );
        }
    }

}

export default Explosion;