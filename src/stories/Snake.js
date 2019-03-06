import React from 'react';
import { createSnake } from "../state"

export default class Snake extends React.Component {
    

    render() {
        let snake = this.props.snake || createSnake();
        let { body: [[headX, headY], ...body] } = snake;
        return (
            < div >
                <Head x={headX} y={headY} {...this.props} />
                {body.map(([x, y],index) => <SnakeBodyPart x={x} y={y} key={index}  {...this.props} />)}
            </div >
        );
    }
}
function Head(props) {
    const { x, y } = props;
    return <SnakeBodyPart x={x} y={y} {...props} color="green" />
}
function SnakeBodyPart({ x, y, height = 50, color = "yellow" }) {
    const styles = {
        backgroundColor: color,
        width: height,
        height: height,
        borderRadius: 5,
        position: 'absolute',
        left: x * height,
        top: y * height,
        outline : 'white'
    };
    return <div style={styles} />;
}