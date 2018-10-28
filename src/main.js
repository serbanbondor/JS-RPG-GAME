import Engine from "./engine";
import GameObject from "./gameobject";
import Renderable from "./renderable";

import playerImg from './images/player.png';
import enemyImg from './images/enemy.png';

// Create an engine object from the Engine Class
let engine = new Engine();

// Create a game object from the GameObject Class
let testObj1 = new GameObject();
// The Object has the position x = 300 and y = 300
testObj1.position = [300, 300];
// The object takes arguments for: (image, startFrame, frameCount, frame-x, frame-y, speed)
testObj1.addChild(new Renderable(enemyImg, 1, 7, 9, 4, 10));

engine.addObject(testObj1);

// Delta Time
engine.update = (dt) => {
    
    testObj1.translate(100 * dt, 50 * dt);

};

