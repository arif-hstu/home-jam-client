import React from 'react';

import './Events.css';
import fakeEventData from './fakeEventData';

console.log(fakeEventData);

function Events() {
	return (
		<div className='Events'>
			<div className="upcomingShows">
				<Event />
			</div>
		</div>
	)
}

export default Events;
