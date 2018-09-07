import React from 'react';
import { connect } from 'react-redux';
import { delComment } from '../../../../redux';
import './index.css';

const Comment = props => {
	return (
		<div className='comment'>
			{props.comment}
			<button className='delComment' onClick={() => props.delComment(props.id)}>X</button>
		</div>
	);
}

export default connect(null, { delComment })(Comment);