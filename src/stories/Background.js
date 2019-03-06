import React from 'react';
import { WIDTH } from '../constants'

export default class Background extends React.Component {
    constructor(props) {
        super(props);
        const { height } = props;
        this.state = {
            rows: new Array(height).fill(0)
        }
    }
    render() {
        const rows = this.state.rows;
        return (
            <div>
                {rows.map((row, index) => <BackgroundCell {...this.props} key={index} index={index} />)}
            </div>
        )
    }
}
export function BackgroundCell({ color = 'black', index, rowHeight = 50 }) {
    const styles = {
        backgroundColor: color ,
        width: WIDTH * rowHeight,
        height: rowHeight,
        position: 'absolute',
        left: 0,
        top: rowHeight * index
    };
    return <div style={styles} />;
}