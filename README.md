This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Implementation explanation

3 components: 
- buttons panel (zoom in, zoom out, reset)
- view area (clickable for moving circle)
- circle

When button or field clicked **action** is being **dispatched**. There are 4 **reducers**:
- zoom in (scale +1)
- zoom out (scale -1, can't be less than 1)
- reset (**initial state** used)
- circle position changed (coordinates relative to container are calculated from **click event**)

## Implementation time logs

- initial app skeleton (react+redux)  - `1h`
- describing components - `1h`
- styles - `30min`
- actions/reducers/logic - `2h`

