import React from 'react';

import './Home.css';
import Header from '../Header/Header';
import Events from '../Events/Events';

function Home() {
	return (
		<div className='Home'>
			<Header />
			<Events />
		</div>
	)
}

export default Home;