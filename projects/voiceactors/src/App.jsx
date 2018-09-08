import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Animelist from "./components/Animelist";
import ShowAnime from "./components/ShowAnime";
import Characterlist from "./components/Characterlist";
import ShowCharacter from "./components/ShowCharacter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/anime" component={Animelist} />
          <Route path="/anime/:filter?" component={ShowAnime} />
          <Route exact path="/character" component={Characterlist} />
          <Route path="/character/:filter?" component={ShowCharacter} />
          {/* <Route path='/person' component={ Personlist} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
