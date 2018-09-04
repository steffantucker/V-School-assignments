import React from "react";

const DecClock = props => {
	const style = {
		display: "flex",
		flexDirection: "row"
	}

  return (
    <div style={style}>
      <div>{props.hour < 10 ? "0" + props.hour : props.hour}</div>:
      <div>{props.minute < 10 ? "0" + props.minute : props.minute}</div>:
      <div>{props.second < 10 ? "0" + props.second : props.second}</div>.
      <div>
        {props.milli > 100 ? props.milli : "0" + (props.milli > 10 ? props.milli : "0" + props.milli)}
      </div>
    </div>
  );
};

export default DecClock;
