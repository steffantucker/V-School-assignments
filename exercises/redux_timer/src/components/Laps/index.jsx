import React from "react";
import { connect } from "react-redux";
import DecClock from '../DecClock';
import BinClock from '../BinClock';
import HexClock from '../HexClock';

const Laps = ({ laps }) => {
  const style = {
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly"
    }
  };
  return (
    <ul>
      {laps.map((v, i) => {
        return (
          <li key={i} style={style.mainContainer}>
            <DecClock
              milli={v.milli}
              second={v.second}
              minute={v.minute}
              hour={v.hour}
            />
            <HexClock
              milli={v.milli}
              second={v.second}
              minute={v.minute}
              hour={v.hour}
            />
            <BinClock
              milli={v.milli}
              second={v.second}
              minute={v.minute}
              hour={v.hour}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default connect(
  state => state,
  null
)(Laps);
