import React, { Component } from 'react';
import Hero from './Hero';
import superheroes from './Superheroes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {superheroes.map(hero => <Hero info={hero} />)}
      </div>
    );
  }
}

export default App;
