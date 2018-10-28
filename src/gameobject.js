// GameObject class to create new game objects
export default class GameObject {
    constructor() {
        this.position = [0, 0];
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.position[0], this.position[1]);

        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 50, 50);

        this.children.forEach(child => {
            if(child instanceof GameObject) {
                child.draw(ctx);
            }
        });

        ctx.restore();
    }
}   