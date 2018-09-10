import React, { Component } from "react";
import { connect } from "react-redux";
import { Media } from "react-bootstrap";
import uuidv4 from "uuid/v4";
import { getCharacter, clearTimers } from "../../redux";
import Listitem from "../Listitem";

class ShowAnime extends Component {
  componentWillMount() {
<<<<<<< HEAD
    clearTimers();
    this.props.getCharacter(this.props.match.params.filter);
  }

=======
    clearTimers()
    this.props.getCharacter(this.props.match.params.filter);
  }

  styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      paddingLeft: 10,
      paddingRight: 10
    },
    anime: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 20,
      textAlign: "left"
    },
    characters: {
      borderLeft: "3px solid aqua"
    }
  };
>>>>>>> 5aaf62fe07bdc7419bdeec1251f08cd37ebbc8c0
  render() {
    return (
      <div>
        {this.props.results ? (
<<<<<<< HEAD
          <Media>
=======
          <Media style={this.styles.anime}>
>>>>>>> 5aaf62fe07bdc7419bdeec1251f08cd37ebbc8c0
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
<<<<<<< HEAD
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
=======
        {/*TODO: Rewrite to cycle through VAs, then through characters for VA*/}
        {this.props.results && this.props.results.voiceactors? this.props.results.voiceactors !== "none" ? (
          this.props.results.voiceactors.map(actor => (
            <div>
              <Media style={this.styles.anime}>
                <Media.Left height={128}>
                  <img src={actor.image} alt="" />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>{actor.name}</Media.Heading>
                  <p>{actor.description}</p>
                </Media.Body>
              </Media>
              <div style={this.styles.container}>
                {actor.roles.map(role => (
                  <Listitem
                    key={uuidv4()}
                    click={() =>
                      this.props.history.push(
                        `/character/${role.character.mal_id}`
                      )
                    }
                    image={role.character.image_url}
                    name={role.character.name}
                    description={role.anime.name}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <h1>No voice actors for this character</h1>
        ): null}
        {this.props.results && this.props.results.more?<div style={{ textAlign: "center" }}>
            <div className="loader" />
          </div>:null}
        {/* <div style={this.styles.container}>
          {this.props.type === "character" &&
            this.props.results.vas.map(v => {
              return (
                <Listitem
                  key={uuidv4()}
                  click={() =>
                    this.props.history.push(`/character/${v.mal_id}`)
                  }
                  image={v.image_url}
                  name={v.name}
                />
              );
            })}
        </div> */}
>>>>>>> 5aaf62fe07bdc7419bdeec1251f08cd37ebbc8c0
      </div>
    );
  }
}

export default connect(
  state => state,
  { getCharacter }
)(ShowAnime);
