import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = props => {
	return (
		<Menu pointing secondary>
			<Menu.Item name='home' active={props.active === 'home'} />
			<Menu.Item name='products' active={props.active === 'products'} />
			<Menu.Item name='about us' active={props.active === 'about'} />
		</Menu>
	)
}

export default Navbar;