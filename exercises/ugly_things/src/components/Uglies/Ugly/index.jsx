import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delUgly, addComment } from '../../../redux'
import Comment from './Comment'
import './index.css';

class Ugly extends Component {
	state = {
		newComment: ''
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.addComment(this.props.id, this.state.newComment);
		this.setState({ newComment: '' })
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		return (
			<div className='ugly'>
				<img src={this.props.url} alt={this.props.description} />
				<h3>{this.props.title}</h3>
				<div>{this.props.description}</div>
				<button id='delete' onClick={() => this.props.delUgly(this.props.id)}>X</button>
				{this.props.comments.filter(c => c.uglyId === this.props.id).map(com => <Comment key={com.id} id={com.id} comment={com.comment} />)}
				<form onSubmit={this.handleSubmit} id="comment">
					<input type="text" name="newComment" id="commentText" placeholder='New Comment' onChange={this.handleChange} value={this.state.newComment} />
					<button id="commentButton">Add</button>
				</form>
			</div>
		)
	}
}

export default connect(state => ({ comments: state.comments }), { delUgly, addComment })(Ugly);