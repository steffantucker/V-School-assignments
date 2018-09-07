import React, { Component } from "react";
import { connect } from "react-redux";
import { Media } from "react-bootstrap";
import uuidv4 from "uuid/v4";
import { getAnime } from "../../redux";
import Listitem from "../Listitem";

class ShowAnime extends Component {
  componentWillMount() {
    this.props.getAnime(this.props.match.params.filter);
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
    }
  };
  render() {
    console.dir(this.props);
    return (
      <div>
        {this.props.results ? (
          <Media style={this.styles.anime}>
            <Media.Left height={128}>
              <img src={this.props.results.image} />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{this.props.results.title}</Media.Heading>
              <p>{this.props.results.description}</p>
            </Media.Body>
          </Media>
        ) : null}
        <div style={this.styles.container}>
          {this.props.type === "character" &&
            this.props.results.characters.map(v => {
              return (
                <Listitem key={uuidv4()} click={() => this.props.history.push(`/character/${v.mal_id}`)} image={v.image_url} name={v.name} />
              );
            })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  { getAnime }
)(ShowAnime);
