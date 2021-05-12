import React from 'react';

import './Navbar.css';
import HomeJam from '../../../resources/icons/HomeJam.svg';
import searchIcon from '../../../resources/icons/search.svg';
import cartIcon from '../../../resources/icons/cart.svg';

function Navbar() {
	return (
		<div className='Navbar'>
			<div className="logoHolder">
				<img src={HomeJam} alt="HomeJam" />
			</div>
			<div className="navHolder">
				<img src={searchIcon} alt="Search" />
				<a href="#">Search</a>
				<a href="#">Help</a>
				<a href="#">Account</a>
				<img src={cartIcon} alt="Cart" />
			</div>
		</div>
	)
}

export default Navbar;