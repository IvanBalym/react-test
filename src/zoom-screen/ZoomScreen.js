import React, { Component } from 'react';
import { connect } from "react-redux";
import './ZoomScreen.css';
import Circle from '../circle/Circle';
import { circlePositionSet } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        scale: state.controls.scale
    };
};

class ZoomScreen extends Component {
    fieldClickHandler = e => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.props.dispatch(circlePositionSet(x, y));
    };

    render() {
        const { scale } = this.props;
        const fieldStyle = {
            width: 800 * scale + 'px',
            height: 500 * scale + 'px'
        };

        return (
            <div className="screen">
                <div
                    className="field"
                    style={fieldStyle}
                    onClick={this.fieldClickHandler}
                >
                    <Circle />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(ZoomScreen);
