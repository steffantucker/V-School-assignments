import React from 'react'

const Header = props => {
	const styles = {
		container: {
			width: '100%',
			height: '75px'
		},
		h1: {
			paddingTop: '20px'
		}
	}

	return(
	<div style={styles.container}>
		<h1 style={styles.h1}>Definetely Not Robots</h1>
	</div>)
}

export default Header;