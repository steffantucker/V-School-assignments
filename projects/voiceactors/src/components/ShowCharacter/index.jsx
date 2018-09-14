import React, { Component } from "react";
import { connect } from "react-redux";
import { Media } from "react-bootstrap";
import uuidv4 from "uuid/v4";
import { getCharacter, clearTimers } from "../../redux";
import Listitem from "../Listitem";

class ShowAnime extends Component {
  componentWillMount() {
    clearTimers();
    this.props.getCharacter(this.props.match.params.filter);
  }

  render() {
    return (
      <div>
        {this.props.results ? (
          <Media>
            <Media.Left height={128}>
              <img src={this.props.results.image} alt="" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{this.props.results.name}</Media.Heading>
              <p>{this.props.results.description}</p>
            </Media.Body>
          </Media>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div className="loader" />
          </div>
        )}
        {this.props.results && this.props.results.voiceactors ? (
          this.props.results.voiceactors !== "none" ? (
            this.props.results.voiceactors.map(actor => (
              <div key={uuidv4()}>
                <Media>
                  <Media.Left height={128}>
                    <img src={actor.image} alt="" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>{actor.name}</Media.Heading>
                    <p>{actor.description}</p>
                  </Media.Body>
                </Media>
                <div className="displayContainer">
                  {actor.roles.map(role => (
                    <Listitem
                      key={uuidv4()}
                      click={() =>
                        this.props.history.push(
                          `/character/${role.character.mal_id}`
                        )
                      }
                      image={role.character.image_url}
                      name={role.character.name
                        .split(", ")
                        .reverse()
                        .join(" ")}
                      description={role.anime.name}
                    />
                  ))}
                </div>
                <hr />
              </div>
            ))
          ) : (
            <h1>No voice actors for this character</h1>
          )
        ) : null}
        {this.props.results && this.props.results.more ? (
          <div style={{ textAlign: "center" }}>
            <div className="loader" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  state => state,
  { getCharacter }
)(ShowAnime);
