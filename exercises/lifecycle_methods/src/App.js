import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {characters:[]};
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/').then(re => this.setState({characters: re.data.results}))
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.characters.map(v => <li>{v.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
