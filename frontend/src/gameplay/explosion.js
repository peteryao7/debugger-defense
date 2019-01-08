
const explosion = new Image();
explosion.src = '/game/explosion.png'

class Explosion {
    constructor(startTime, position) {
        this.startTime = startTime;
        this.elapsedTime = null;
        this.position = position;
        this.doneExploding = false;
        this.explosion = explosion;
    }

    draw(ctx, currentSeconds) {
        debugger
        this.elapsedTime = currentSeconds - this.startTime;
        if (( this.elapsedTime ) > 500) {
            this.doneExploding = true;
        }
        
        if (this.elapsedTime % 1000 <= 250) {
             ctx.drawImage(
                this.explosion,
                0,
                0,
                128,
                128, 
                this.position[0], 
                this.position[1],
                128,
                128
            );
        } else if (this.elapsedTime % 1000 <= 500) {
            ctx.drawImage(
                this.explosion,
                128,
                0,
                128,
                128,
                this.position[0],
                this.position[1],
                128,
                128
            );
            
        } else if (this.elapsedTime % 1000 <= 750) {
            ctx.drawImage(
                this.explosion,
                (128 * 3),
                0,
                128,
                128,
                this.position[0],
                this.position[1],
                128,
                128
            );
           
        } else if (this.elapsedTime % 1000 <= 999) {
            ctx.drawImage(
                this.explosion,
                (128 * 4),
                0,
                128,
                128,
                this.position[0],
                this.position[1],
                128,
                128
            ); 
        }
    }

}

export default Explosion;