import React from 'react'

const Box = props => {
	const container = {
		width: '200px',
		height: '300px',
		padding: '10px',
		background: props.background || 'plum',
		borderRadius: '5px',
		textAlign: 'center',
		overflow: 'hidden'
	}

	const title = {
		fontSize: '1.3rem',
		marginBottom: '5px'
	}

	const subtitle = {
		marginBottom: '10px',
		fontSize: '0.8rem',
		fontStyle: 'italic',
		color: 'rgba(0,0,0,0.5)'
	}

	const info = {
		height: '250px',
		padding: '2px 5px',
		borderTop: '2px solid rgba(0,0,0,0.5)',
		backgroundClip:'padding-box',
		overflow: 'auto'
	}

	return (
		<div style={container}>
			<div style={title}>{props.title || 'Lorem Ipsum'}</div>
			<div style={subtitle}>{props.subtitle || 'Ipsum'}</div>
			<div style={info}>{props.content || 'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.'}</div>
		</div>
	)
}

export default Box;