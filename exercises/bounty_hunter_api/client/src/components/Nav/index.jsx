import React, { Component } from "react";
import { Link } from "react-router-dom";
import bigshot from "../../resources/BigShot.png";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="navbar">
        <Link id="homeimage" className="navlink" to="/">
          <img src={bigshot} alt="Home" />
        </Link>
        <Link className="navlink" to="/list">
          Bounties
        </Link>
        <Link className="navlink" to="/add">
          New Bounty
        </Link>
      </div>
    );
  }
}

export default Nav;
