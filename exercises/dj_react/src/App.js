import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.rotatingColors = [];
    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    this.state = {square1: 'white',square2: 'white',square3: 'white',square4: 'white', rotate: [0,0,0,0]};
  }
  render() {
    return (
      <div className="App">
        {Array.from(new Array(4), (v, i) => <Square background={this.state[`square${i + 1}`]} rotate={this.state.rotate[i]} />)}
        <button onClick={this.click1} />
        <button onClick={this.click2} />
        <button onClick={this.click3} />
        <button onClick={this.click4} />
        <button onClick={this.click5} />
        <button onClick={this.click6} />
        <button onClick={this.click7} />
        <button onClick={this.click8} />
      </div>
    );
  }

  click1 = e => {
    let color = this.state.square1 === 'white' ? 'black' : 'white';
    this.setState({square1: color,square2: color,square3: color,square4: color});
  }

  click2 = e => this.setState({square1: 'purple', square2: 'purple'});

  click3 = e => this.setState({square3: 'blue'});

  click4 = e => this.setState({square4: 'blue'});

  click5 = e => {
    if (this.timer3 > 0) {
      clearInterval(this.timer3);
      this.timer3 = 0;
    }
    if (this.timer2 > 0) {
      clearInterval(this.timer2);
      this.timer2 = 0;
    }
    if (this.timer1 > 0) {
      clearInterval(this.timer1);
      this.timer1 = 0;
    } else {
      this.timer1 = setInterval(this.box1coloring, 1000);
      this.box1coloring();
    }
  }

  click6 = e => {
    if (this.timer3 > 0) {
      clearInterval(this.timer3);
      this.timer3 = 0;
    }
    if (this.timer1 > 0){
      clearInterval(this.timer1);
      this.timer1 = 0;
    }
    if (this.timer2 > 0) {
      clearInterval(this.timer2);
      this.timer2 = 0;
      this.rotatingColors = [];
    } else {
      this.timer2 = setInterval(this.rotating, 1000);
      this.rotating();
    }
  }

  click7 = e => {
    if (this.timer3 > 0) {
      clearInterval(this.timer3);
      this.timer3 = 0;
    }
    if (this.timer1 > 0){
      clearInterval(this.timer1);
      this.timer1 = 0;
    }
    if (this.timer2 > 0) {
      clearInterval(this.timer2);
      this.timer2 = 0;
      this.rotatingColors = [];
    } else {
      this.timer2 = setInterval(this.widershins, 1000);
      this.widershins();
    }
  }

  click8 = e => {
    if (this.timer3 > 0) {
      clearInterval(this.timer3);
      this.timer3 = 0;
    } else {
      this.timer3 = setInterval(this.fadeGlow, 1000);
    }
  }

  box1coloring = () => { 
    if (this.colors.indexOf(this.state.square1) !== -1)
      this.setState({square1: this.colors[(this.colors.indexOf(this.state.square1) + 1) % (this.colors.length - 1)]})
    else
      this.setState({square1: this.colors[0]})
  }

  rotating = () => {
    if (!this.rotatingColors.length)
      this.rotatingColors.push(this.colors[0]);
    else
      this.rotatingColors.unshift(this.colors[(this.colors.indexOf(this.rotatingColors[0]) + 1) % (this.colors.length - 1)])
    while (this.rotatingColors.length > 4)
      this.rotatingColors.pop();
    this.setState(prev => {return {square1: this.rotatingColors[0] || prev.square1, square2: this.rotatingColors[1] || prev.square2, square3: this.rotatingColors[3] || prev.square3, square4: this.rotatingColors[2] || prev.square4,}})
  }

  widershins = () => {
    if (!this.rotatingColors.length)
      this.rotatingColors.push(this.colors[0]);
    else
      this.rotatingColors.unshift(this.colors[(this.colors.indexOf(this.rotatingColors[0]) + 1) % (this.colors.length - 1)])
    while (this.rotatingColors.length > 4)
      this.rotatingColors.pop();
    this.setState(prev => {return {square1: this.rotatingColors[3] || prev.square1, square2: this.rotatingColors[2] || prev.square2, square3: this.rotatingColors[0] || prev.square3, square4: this.rotatingColors[1] || prev.square4,}})
  }

  fadeGlow = () => {
    this.setState(prev => {return {rotate: prev.rotate.map(v => (v + 1) % 360)}})
  }
}

export default App;
