import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/anime">
              <NavItem>Anime</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
