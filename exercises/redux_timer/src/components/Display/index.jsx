import React from 'react';
import { connect } from 'react-redux';
import BinClock from '../BinClock';
import DecClock from '../DecClock';
import HexClock from '../HexClock';

const Display = ({milli, second, minute, hour}) => {
	const style = {
		mainContainer: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-evenly'
		},
		container: {
			display: 'flex',
			flexDirection: 'row',
		}
	}
	return (
		<div style={style.mainContainer}>
			<DecClock milli={milli} second={second} minute={minute} hour={hour} />
			<HexClock milli={milli} second={second} minute={minute} hour={hour} />
			<BinClock milli={milli} second={second} minute={minute} hour={hour} />
		</div>
	);
};

export default connect(state => state, null)(Display);