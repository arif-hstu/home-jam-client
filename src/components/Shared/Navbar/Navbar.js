import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";

import Menu from '../Menu/Menu';
import './Navbar.css';
import HomeJam from '../../../resources/icons/HomeJam.svg';
import searchIcon from '../../../resources/icons/search.svg';
import cartIcon from '../../../resources/icons/cart.svg';

function Navbar() {
	const history = useHistory();

	return (
		<div className='Navbar'>
			<div className="logoHolder">
				<img
					style={{ cursor: 'pointer' }}
					onClick={() => history.push('/')}
					src={HomeJam}
					alt="HomeJam"
				/>
			</div>
			<div className="navHolder">
				<img
					id='search'
					style={{ cursor: 'pointer' }}
					onClick={() => history.push('/notFound')}
					src={searchIcon}
					alt="Search"
				/>
				<Link to='/notFound' className='hidable' href="#">Search</Link>
				<Link to='/notFound' className='hidable' href="#">Help</Link>
				<Link to='/notFound' className='hidable' href="#">Account</Link>
				<img
					onClick={() => {
						history.push('/notFound');
					}}
					src={cartIcon}
					alt="Cart"
					id='cart'
				/>
				<Menu />
			</div>
		</div>
	)
}
export default Navbar;