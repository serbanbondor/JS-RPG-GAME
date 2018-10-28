import GameObject from "./gameobject";
import Input from "./input";

// Engine Class for our RPG Game
export default class Engine {
    constructor() {
        // Create the canvas
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        this.lastTime = new Date().getTime();

        this.objs = [];

        this.input = new Input();

        window.requestAnimationFrame(this.loop.bind(this));
    }

    // Function for adding new game objects
    addObject(obj) {
        if(obj instanceof GameObject) {
            this.objs.push(obj);
        }
        else {
            console.error("Invalid object added. Not GameObject");
        }
    }

    // Canvas - whole browser width and height
    loop() {
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;

        // Do updates here!
        if(this.update) {
            this.update(dt);
        }

        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Do drawing here!
        this.objs.forEach(obj => {
            obj.draw(this.ctx);
        });

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this));
    }
}