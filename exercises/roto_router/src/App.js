import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import About from './About'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/services' component={ Services } />
          <Route path='/about' component={ About } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
