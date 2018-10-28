import missingIMG from './images/missing.jpg';
export default class Renderable {
    constructor(image) {
        this.img = new Image();
        this.img.src = image;
    }
}