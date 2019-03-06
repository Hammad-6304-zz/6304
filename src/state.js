
import { rand, compareVectors } from './helpers'
import { TYPES, DIRECTIONS, HEIGHT, WIDTH, DEFAULT_SPEED } from './constants'

export const turnDown = (snake) => turn("ArrowDown", snake);
export const turnLeft = (snake) => turn("ArrowLeft", snake);
export const turnUp = (snake) => turn("ArrowUp", snake);
export const turnRight = (snake) => turn("ArrowRight", snake);



export function createSnake(body = [[4, 0]]) {
    return {
        body: body,
        direction: DIRECTIONS['ArrowRight'],
        type: TYPES.SNAKE,
        speed: DEFAULT_SPEED
    }
}

export function createApple() {
    return {
        location: [rand(0, WIDTH), rand(0, HEIGHT)],
        type: TYPES.APPLE
    }
}

const getSpeed = (snake) => snake.speed || DEFAULT_SPEED

export function move(snake, growing, speedAchieved = 0) {
    let speed = getSpeed(snake);
    snake = shiftBody(snake, growing);
    speedAchieved += 1;
    if (speed > speedAchieved) {
        snake = move(snake, false, speedAchieved);
    }
    return snake;
}
function shiftBody(snake, growing) {
    let { body, direction } = snake;
    let [headX, headY] = body[0];
    let [dirX, dirY] = direction;
    let newHead = [[headX + dirX, headY + dirY]]
    let newBody = growing ? body.slice(0) : body.slice(0, -1);
    

    return Object.assign({}, snake, { body: newHead.concat(newBody) });
}
export const oppositeDirection = (dir) => dir.map((x) => x === 0 ? 0 : -x);

function isTurnAllowed(currentDirection, newDirection) {
    const oppositeDirection = currentDirection.map((x) => x === 0 ? 0 : -x);
    return !compareVectors(oppositeDirection, newDirection)
}
export function turn(keyboardCode, snake) {
    let newDirection = DIRECTIONS[keyboardCode];
    if (newDirection !== undefined && isTurnAllowed(snake.direction, newDirection)) {
        return Object.assign({}, snake, { direction: newDirection })
    } else {
        return snake;
    }
}

export function headOverlappingWithBody({ body: [[headX, headY], ...body] }) {
    return body.some(([bodyX, bodyY]) => headX === bodyX && headY === bodyY);
}

export function increaseSpeed(step, snake) {
    return Object.assign({}, snake, { speed: snake.speed + step });
}

export function headOutsideBoundaries({ body: [[headX, headY]] }) {
    return headX >= WIDTH || headY >= HEIGHT || headX < 0 || headY < 0;
}

export function died(snake) {
    return headOverlappingWithBody(snake) || headOutsideBoundaries(snake);
}

export function eating({ location: [appleX, appleY] }, { body: [[headX, headY]] }) {
    return appleX === headX && appleY === headY;
}

export function kill(snake) {
    return Object.assign({}, snake, { body: [[-1, -1]] });
}

