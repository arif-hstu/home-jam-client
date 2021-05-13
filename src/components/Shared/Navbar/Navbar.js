import React from 'react';

import './Navbar.css';
import HomeJam from '../../../resources/icons/HomeJam.svg';
import searchIcon from '../../../resources/icons/search.svg';
import menu from '../../../resources/icons/menu.svg';
import cartIcon from '../../../resources/icons/cart.svg';

function Navbar() {
	return (
		<div className='Navbar'>
			<div className="logoHolder">
				<img src={HomeJam} alt="HomeJam" />
			</div>
			<div className="navHolder">
				<img src={searchIcon} alt="Search" />
				<a className='hidable' href="#">Search</a>
				<a className='hidable' href="#">Help</a>
				<a className='hidable' href="#">Account</a>
				<img src={cartIcon} alt="Cart" />
				<img src={menu} alt="Menu" />
			</div>
		</div>
	)
}

export default Navbar;