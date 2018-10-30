import { combineReducers } from "redux";
import { ZOOM_IN, ZOOM_OUT, ZOOM_RESET, CIRCLE_POSITION_SET } from '../actions';

const initialState = {
    scale: 1,
    circlePositionX: 100,
    circlePositionY: 100
};

const controls = function(state = initialState, { type, payload }) {
    switch (type) {
        case ZOOM_IN: {
            return {
                ...state,
                scale: state.scale + 1,
                circlePositionX: state.circlePositionX * (state.scale + 1) / state.scale,
                circlePositionY: state.circlePositionY * (state.scale + 1) / state.scale
            };
        }
        case ZOOM_OUT: {
            if(state.scale === 1) {
                return state;
            }
            return {
                ...state,
                scale: state.scale - 1,
                circlePositionX: state.circlePositionX * (state.scale - 1) / state.scale,
                circlePositionY: state.circlePositionY * (state.scale - 1) / state.scale
            };
        }
        case ZOOM_RESET: {
            return initialState;
        }
        case CIRCLE_POSITION_SET: {
            return {
                ...state,
                circlePositionX: payload.x,
                circlePositionY: payload.y
            };
        }
        default:
            return state;
    }
};

export default combineReducers({ controls });
