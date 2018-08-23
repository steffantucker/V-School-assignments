import React from 'react';

const Pet = props => {
	return (
		<div className='pet'>
			A {props.breed} named <span className='petName'>{props.name}</span>
		</div>
	)
}

export default Pet;