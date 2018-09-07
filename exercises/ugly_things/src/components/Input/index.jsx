import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUgly } from '../../redux';
import './index.css';

class Input extends Component {
	state = {
		title: '',
		description: '',
		url: ''
	};

	emptyState = {
		title: '',
		description: '',
		url: ''
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.addUgly(this.state.title, this.state.description, this.state.url);
		this.setState(this.emptyState);
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value });
	render() {
		return (
			<form id='mainInput' onSubmit={this.handleSubmit}>
				<label htmlFor='title'>Title</label>
				<input name="title" type="text" placeholder="title" value={this.state.title} onChange={this.handleChange} />
				<label htmlFor='description'>Description</label>
				<input name="description" type="text" placeholder="description" value={this.state.description} onChange={this.handleChange} />
				<label htmlFor='url'>URL</label>
				<input name="url" type="text" placeholder="url" value={this.state.url} onChange={this.handleChange} />
				<button>Submit</button>
			</form>
		)
	}
}

export default connect(null, { addUgly })(Input);