
export const ZOOM_IN = 'ZOOM_IN';
export const ZOOM_OUT = 'ZOOM_OUT';
export const ZOOM_RESET = 'ZOOM_RESET';
export const CIRCLE_POSITION_SET = 'CIRCLE_POSITION_SET';

export const zoomIn = () => ({
    type: ZOOM_IN
});

export const zoomOut = () => ({
    type: ZOOM_OUT
});

export const zoomReset = () => ({
    type: ZOOM_RESET
});

export const circlePositionSet = (x, y) => ({
    type: CIRCLE_POSITION_SET,
    payload: {x, y}
});
