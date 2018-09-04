import React from 'react';
import { connect } from 'react-redux';
import Ugly from './Ugly';
import './index.css';

const Uglies = props => {
	return (
		<div id="uglies">
			{props.uglies.map(u => <Ugly key={u.id} {...u} />)}
		</div>
	)
}

export default connect(store=>store, {})(Uglies);