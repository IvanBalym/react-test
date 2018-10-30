import React, { Component } from 'react';
import './App.css';
import ZoomScreen from './zoom-screen/ZoomScreen';
import Controls from './controls/Controls';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = {  };

class App extends Component {
  render() {
    return (
      <div className="App">
          <Controls />
          <ZoomScreen />
      </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
