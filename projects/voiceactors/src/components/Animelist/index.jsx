import React from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import Listitem from '../Listitem';
import Search from "../Search";
import { getAnime } from "../../redux";

const Animelist = props => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }
  return (
    <div>
      <Search type="anime" />
      <div style={styles.container}>
        {props.type==='anime' &&
          props.list.map(v => (
            <Listitem
              key={uuidv4()}
              click={() => props.history.push(`/anime/${v.id}`)}
              name={v.title}
              image={v.img}
            />
          ))}
      </div>
    </div>
  );
};

export default connect(
  state => ({ list: state.results, type: state.type }),
  { getAnime }
)(Animelist);
