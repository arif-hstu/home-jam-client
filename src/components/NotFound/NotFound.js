import React from 'react';

import Navbar from '../Shared/Navbar/Navbar';
import './NotFound.css';

function NotFound() {
	return (
		<div className='NotFound'>
			<Navbar />
			<div className='contentHolder'>
				<h4>This Page is Under Construction</h4>
				<div className="overlay"></div>
			</div>
		</div>
	)
}

export default NotFound;