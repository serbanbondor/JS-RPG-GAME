import Engine from "./engine";
import GameObject from "./gameobject";

// Create an engine object from the Engine Class
let engine = new Engine();

let testObj1 = new GameObject();
testObj1.position = [300, 300];
engine.addObject(testObj1);