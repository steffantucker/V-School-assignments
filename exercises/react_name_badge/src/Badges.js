import React, { Component } from "react";
import Badge from "./Badge";
import Form from "./Form";

class Badges extends Component {
  state = {
    input: {
      fName: "",
      lName: "",
      email: "",
      pob: "",
      phone: "",
      food: "",
      custom: ""
    },
    badges: []
  };

  style = {
    container: {
      display: "grid",
      gridTemplate: "1fr 4fr / 1fr",
      width: "100%",
      height: "100%"
    },
    input: {
      justifySelf: "center"
    },
    badgeCollection: {
      justifySelf: "center",
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      height: "100%"
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prev => ({
      input: {
        fName: "",
        lName: "",
        email: "",
        pob: "",
        phone: "",
        food: "",
        custom: ""
      },
      badges: [...prev.badges, prev.input]
    }));
  };

  handleChange = e => {
    e.persist();
    this.setState(prev => {
      const t = { input: { ...prev.input } };
      t.input[e.target.name] = e.target.value;
      return t;
    });
  };

  render() {
    return (
      <div style={this.style.container}>
        <div style={this.style.input}>
          <Form
            values={this.state.input}
            handlesubmit={this.handleSubmit}
            handlechange={this.handleChange}
          />
        </div>
        <div style={this.style.badgeCollection}>
          {this.state.badges.map((badge, i) => (
            <Badge key={i} {...badge} />
          ))}
        </div>
      </div>
    );
  }
}

export default Badges;
