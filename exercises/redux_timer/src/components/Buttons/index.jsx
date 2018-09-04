import React from 'react';
import { connect } from 'react-redux'
import { correction, start, stop, addMilli, addSecond, addLap, reset} from '../../redux'

const Buttons = props => {
	let timer = null;
	let ctimer = null;
	const startTimer = () => {
		if (!timer) {
			props.start();
			timer = window.setInterval(props.addMilli, 63);
			window.addEventListener('focus', props.correction);
		}
	}

	const stopTimer = () => {
		if(timer) {
			props.stop();
			clearInterval(timer);
			window.removeEventListener('focus', props.correction);
			timer = null;
		}
	}

	return (
		<div>
			<button onClick={startTimer}>Start</button>
			<button onClick={stopTimer}>Stop</button>
			<button onClick={props.reset}>Reset</button>
			<button onClick={props.addLap}>Lap</button>
		</div>
	);
};

export default connect(null, { correction, start, stop, addMilli, addSecond, addLap, reset})(Buttons);