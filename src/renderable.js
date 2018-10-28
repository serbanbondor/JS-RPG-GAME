import missingIMG from './images/missing.jpg';
export default class Renderable {
    constructor(image = missingIMG, startFrame = 0, frameCount = 0, framesx = 1, framesy = 1, speed = 1) {
        this.img = new Image();
        this.img.src = image;

        this.frame = startFrame;

        this.startFrame = startFrame;
        this.frameCount = frameCount;

        this.framesx = framesx;
        this.framesy = framesy;

        this.subWidth = this.img.width / framesx;
        this.subHeight = this.img.height / framesy;

        this.speed = speed;

        this.animTime = new Date().getTime();
    }

    draw(ctx) {
        // Increase time between animations by x amount
        let t = new Date().getTime();
        if(t > this.animTime) {
            this.frame++;
            this.animTime = t + 1000 / this.speed;
        }

        // Animate the sprite
        if(this.frame > this.startFrame + this.frameCount) {
            this.frame = this.startFrame;
        }

        // Calculates the pixels for every sprite
        let posx = (this.frame % this.framesx) * this.subWidth;
        let posy = Math.floor(this.frame / this.framesx) * this.subHeight;

        // First 4 values after this.img are for the source and the other for the destination
        ctx.drawImage(this.img, posx, posy, this.subWidth, this.subHeight, 0, 0, this.subWidth, this.subHeight);
    } 
}