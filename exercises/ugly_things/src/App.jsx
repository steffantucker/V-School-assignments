import React, { Component } from 'react';
import Uglies from './components/Uglies';
import Input from './components/Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <hr />
        <Uglies />
      </div>
    );
  }
}

export default App;
