import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import Listitem from "../Listitem";
import Search from "../Search";
import { getAnime, clearTimers } from "../../redux";

class Animelist extends Component {
  componentDidMount() {
    clearTimers();
  }
  styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  };
  render() {
    return (
      <div>
        <Search type="anime" />
        <div style={this.styles.container}>
          {this.props.type === "anime" &&
            this.props.list.map(v => (
              <Listitem
                key={uuidv4()}
                click={() => this.props.history.push(`/anime/${v.id}`)}
                name={v.title}
                image={v.img}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ list: state.results, type: state.type }),
  { getAnime }
)(Animelist);
