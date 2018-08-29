import React, {Component} from 'react'

export default class Hero extends Component {
	constructor(props) {
		super(props);
		this.name = props.info.name;
		this.identity = props.info.identity;
		this.image = props.info.img;
		this.catchphrase = props.info.catchphrase;
	}

	click = () => {
		const voice = new SpeechSynthesisUtterance(this.catchphrase);
		window.speechSynthesis.speak(voice);
		alert(this.catchphrase)
	}

	render() {
		return <div className="hero" onClick={this.click}>
			<img alt={`Of ${this.name}`} className='heroImage' src={this.image} />
			<div className='heroName'>{this.name}</div>
			<div className='heroIdentity'>{this.identity}</div>
		</div>
	}
}
