import React, { Component } from 'react';
import { connect } from "react-redux";
import './Circle.css';

const mapStateToProps = (state) => {
    return {
        x: state.controls.circlePositionX,
        y: state.controls.circlePositionY,
        scale: state.controls.scale
    };
};

class Circle extends Component {
    circleClickHandler = (e) => {
        e.stopPropagation();
    };

    render() {
        const { x, y, scale } = this.props;
        const circleRadius = 30 * scale;
        const circleStyle = {
            top: y - circleRadius,
            left: x - circleRadius,
            width: circleRadius * 2 + 'px',
            height: circleRadius * 2 + 'px'
        };

        return (
            <div
                className="circle"
                style={circleStyle}
                onClick={this.circleClickHandler}
            />
        );
    }
}

export default connect(
    mapStateToProps
)(Circle);
