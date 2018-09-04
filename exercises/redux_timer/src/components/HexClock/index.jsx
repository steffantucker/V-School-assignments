import React from "react";

const HexClock = props => {
	const style = {
		display: 'flex',
		flexDirection: 'row'
	}
  return (
    <div style={style}>
      <div>{props.hour < 16 ? "0" + props.hour.toString(16) : props.hour.toString(16)}</div>:
      <div>{props.minute < 16 ? "0" + props.minute.toString(16) : props.minute.toString(16)}</div>
      :
      <div>{props.second < 16 ? "0" + props.second.toString(16) : props.second.toString(16)}</div>
      .
      <div>
        {props.milli > 256
          ? props.milli.toString(16)
          : "0" + (props.milli > 16 ? props.milli.toString(16) : "0" + props.milli.toString(16))}
      </div>
    </div>
  );
};

export default HexClock;
