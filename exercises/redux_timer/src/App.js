import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Laps from './components/Laps';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Buttons />
        <Laps />
      </div>
    );
  }
}

export default App;
