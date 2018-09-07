import React, { Component } from "react";
import { connect } from "react-redux";
import {
  InputGroup,
  FormControl,
  FormGroup,
  Button
} from "react-bootstrap";
import { search } from "../../redux";

class Search extends Component {
  state = {
    inputValidation: null,
    searchText: "",
    type: this.props.type
  };

  handleChange = e => this.setState({ [e.target.id]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.searchText.length < 3 
    ) {
      this.setState({ inputValidation: "error" });
    } else {
      this.setState({ inputValidation: null });
      this.props.search(
        this.state.type,
        this.state.searchText
      );
    }
  };
  
  styles = {
    form: {
      paddingLeft: 10,
      paddingRight: 10
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={this.styles.form}>
        <FormGroup validationState={this.state.inputValidation}>
          <InputGroup>
            <FormControl
              id="searchText"
              type="text"
              onChange={this.handleChange}
              value={this.state.searchText}
            />
            <InputGroup.Button>
              <Button type="submit">Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

export default connect(
  null,
  { search }
)(Search);
