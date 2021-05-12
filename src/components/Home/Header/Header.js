import React from 'react';

import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import headerBg from '../../../resources/images/headerBg.png';

function Header() {
	return (
		<div className='Header'>
			<Navbar />
			<div className="overlay">
			This is overlay
			</div>
		</div>
	)
}

export default Header;