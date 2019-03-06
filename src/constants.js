const HEIGHT = 20;
const WIDTH = 20;
const Speed = 500;
const TYPES = {
    SNAKE: "SNAKE",
    APPLE: "APPLE"
}
const DEFAULT_SPEED = 1;

const DIRECTIONS = {
    "ArrowUp": [0, -1],
    "ArrowRight": [1, 0],
    "ArrowDown": [0, 1],
    "ArrowLeft": [-1, 0],
}
export{
    HEIGHT, WIDTH, DIRECTIONS, TYPES, DEFAULT_SPEED,Speed
}