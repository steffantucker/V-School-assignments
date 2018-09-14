import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import List from "./components/List";
import Add from "./components/Add";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/add" component={Add} />
        </Switch>
      </div>
    );
  }
}

export default App;
