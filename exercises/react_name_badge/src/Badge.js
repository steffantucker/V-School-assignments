import React from "react";

const Badge = props => {
  const style = {
    container: {
      padding: 0,
      margin: 30,
      border: "1px solid black",
      borderRadius: "10px"
    },
    header: {
      background: `rgb(${Math.floor(Math.random() * 64) * 4}, ${Math.floor(Math.random() * 64) * 4}, ${Math.floor(Math.random() * 64) * 4}`,
      color: "white",
      borderRadius: "10px 10px 0 0"
    },
    form: {
      display: "grid",
      gridTemplate: "repeat(3, 20px) 40px / 1fr 1fr",
      gridGap: "10px 30px",
      padding: 30
    },
    textBox: {
      gridColumn: "1 / span 2"
    }
  };
  return (
	<div style={style.container}>
		<div style={style.header}>&nbsp;</div>
		<div style={style.form}>
			<div style={style.textBox}>{`${props.fName} ${props.lName}`}</div>
			<div>{props.email}</div>
			<div>{props.pob}</div>
			<div>{props.phone}</div>
			<div>{props.food}</div>
			<div style={style.textBox}>{props.custom}</div>
		</div>
	</div>);
};

export default Badge;
