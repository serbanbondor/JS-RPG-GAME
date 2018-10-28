export default class Input {
    constructor() {
        document.onkeydown = (evt) => {
            console.log(evt.code);
        };
    }
}