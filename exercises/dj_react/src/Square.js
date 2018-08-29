import React, {Component} from 'react';

export default class Square extends Component {
	render() {
		return (
			<div style={{
							backgroundColor: this.props.background,
							filter: `hue-rotate(${this.props.rotate})`
						}} className="square"
			/>
		);
	}
}
