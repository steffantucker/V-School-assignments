import React from 'react';
import Pet from './Pet';

const Friend = props => {
	return (
		<div className='friend'>
			<h2>{props.name}</h2>
			<div className='age'>{props.age}</div><br />
			{props.pets.map(v => <Pet name={v.name} breed={v.breed} />)}
		</div>
	)
}

export default Friend;