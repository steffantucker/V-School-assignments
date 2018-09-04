import React from 'react';


const BinClock = props => {
	const style = {
		display: "flex",
		flexDirection: "row"
	}
	let binhour = props.hour.toString(2)
	while(binhour.length <= 6)
		binhour = '0'.concat(binhour)
	let binminute = props.minute.toString(2)
	while(binminute.length <= 6)
		binminute = '0'.concat(binminute)
	let binsecond = props.second.toString(2)
	while(binsecond.length <= 6)
		binsecond = '0'.concat(binsecond)
	let binmilli = props.milli.toString(2)
	while(binmilli.length <= 10)
		binmilli = '0'.concat(binmilli)
	return (
		<div style={style}>
			<div>{binhour}</div>:
			<div>{binminute}</div>:
			<div>{binsecond}</div>.
			<div>{binmilli}</div>
		</div>
	);
};

export default BinClock;