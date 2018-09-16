import React, { Component } from "react";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      bountyAmount: "",
      type: "",
      living: false
    };
  }

  componentDidMount() {
    if (this.props.match.id) {
      axios
        .get(`/bounty/${this.props.edit}`)
        .then(re => {
          if (re.body["__v"]) delete re.body["__v"];
          this.setState(re.body);
        })
        .catch(err => console.error(err));
    }
  }

  handleSubmit = e => {
    axios.post("/bounties", this.state);
  };

  handleChange = e => {
    switch (e.target.type) {
      case "text":
      case "number":
        this.setState({ [e.target.id]: e.target.value });
        break;
      case "radio":
        this.setState({ [e.target.name]: e.target.id });
        break;
      case "checkbox":
        this.setState({ [e.target.id]: e.target.checked });
        break;
      default:
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="firstName"
          onChange={this.handleChange}
          placeholder="First name"
          value={this.state.firstName}
        />
        <input
          id="lastName"
          onChange={this.handleChange}
          placeholder="Last name"
          value={this.state.lastName}
        />
        <input
          id="bountyAmount"
          onChange={this.handleChange}
          placeholder="Bounty price"
          type="number"
          value={this.state.bountyAmount}
        />
        <label>
          <input
            type="radio"
            name="type"
            id="Jedi"
            onChange={this.handleChange}
            checked={this.state.type === "Jedi"}
          />
          Jedi
        </label>
        <label>
          <input
            type="radio"
            name="type"
            id="Sith"
            onChange={this.handleChange}
            checked={this.state.type === "Sith"}
          />
          Sith
        </label>
        <label>
          <input
            type="checkbox"
            name="living"
            id="living"
            checked={this.state.living}
            onChange={this.handleChange}
          />
          Alive?
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default Add;
