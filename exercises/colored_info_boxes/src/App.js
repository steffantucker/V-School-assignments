import React, { Component } from 'react';
import Box from './Box'
import './App.css';

class App extends Component {
  render() {
    const colors = ['red', 'blue', 'grey', 'yellow'];
    const titles = ['a', 'b', 'title', 'this is a longer title'];
    const subtitles = ['a', 'b', 'subtitle', 'this is a longer subtitle'];
    const content = ['this is some content', 'a little bit of content', 'some more content', 'a little bit more of of some content'];
    return (
      <div class="App">
        <Box content="Lorem ipsum is the best filler" />
        {colors.map((v, i) => <Box background={v} 
                                   title={titles[i]} 
                                   subtitle={subtitles[i]} 
                                   content={content[i]} />)}
        {[...Array(10)].map(v => <Box />)}
      </div>
    );
  }
}

export default App;
