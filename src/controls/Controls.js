import React, { Component } from 'react';
import { connect } from "react-redux";
import './Controls.css';
import { zoomIn, zoomOut, zoomReset } from '../redux/actions';



class ZoomScreen extends Component {

    zoomInHandler = () => {
        this.props.dispatch(zoomIn());
    };

    zoomOutHandler = () => {
        this.props.dispatch(zoomOut());
    };

    zoomResetHandler = () => {
        this.props.dispatch(zoomReset());
    };

    render() {
        return (
            <div className="controls">
                <button
                    className='plus'
                    onClick={this.zoomInHandler}
                >
                    +
                </button>
                <button
                    className='minus'
                    onClick={this.zoomOutHandler}
                >
                    <span>-</span>
                </button>
                <button
                    className='reset'
                    onClick={this.zoomResetHandler}
                >
                    Reset
                </button>
            </div>
        );
    }
}

export default connect()(ZoomScreen);
