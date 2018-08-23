import React from 'react';

const Card = props => {
	const style = {
		card: {
			background: props.time === 'Spring' ? 'lightgreen' : props.time === 'Summer' ? 'orange' : props.time === 'Autumn' ? 'red' : 'aliceblue',
			margin: '10px',
			padding: '10px',
			border: '1px solid black',
			borderRadius: '4px'
		},
		price : {
			textDecoration: 'italic',
			fontSize: '0.8em'
		}
	}

	return <div style={style.card}>
		<h3>{props.place}</h3>
		<div style={style.price}>{props.price < 500 ? '$' : props.price < 1000 ? '$$' : '$$$'}</div>
	</div>
}

export default Card;