import React, { Component } from "react";
import { connect } from "react-redux";
import { Media } from "react-bootstrap";
import uuidv4 from "uuid/v4";
import { getAnime, clearTimers } from "../../redux";
import Listitem from "../Listitem";

class ShowAnime extends Component {
  componentWillMount() {
    clearTimers();
    this.props.getAnime(this.props.match.params.filter);
  }

  styles = {
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
          <Media>
            <Media.Left height={128}>
              <img src={this.props.results.image} alt="" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{this.props.results.title}</Media.Heading>
              <p>{this.props.results.description}</p>
            </Media.Body>
          </Media>
<<<<<<< HEAD
        ) : (
          <div style={{ textAlign: "center" }}>
            <div className="loader" />
          </div>
        )}
        <div className="displayContainer">
=======
        ) : <div style={({textAlign: 'center'})}>
          <div className="loader"></div>
        </div>}
        <div style={this.styles.container}>
>>>>>>> 5aaf62fe07bdc7419bdeec1251f08cd37ebbc8c0
          {this.props.type === "character" &&
            this.props.results.characters.map(v => {
              return (
                <Listitem
                  key={v.mal_id}
                  click={() =>
                    this.props.history.push(`/character/${v.mal_id}`)
                  }
                  image={v.image_url}
                  name={v.name}
                />
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
