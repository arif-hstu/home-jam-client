import React from 'react';

import './Home.css';
import Header from '../Header/Header';
import Events from '../Events/Events';
import Reviews from '../Reviews/Reviews';

function Home() {
	return (
		<div className='Home'>
			<Header />
			<Events />
			<Reviews />
		</div>
	)
}

export default Home;