import React, { Component } from 'react';
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar active='home' />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
