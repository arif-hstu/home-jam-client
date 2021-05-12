import React from 'react';

import './Events.css';
import Event from '../Event/Event';
import fakeEventData from './fakeEventData';

console.log(fakeEventData);

function Events() {
	return (
		<div className='Events'>
			<div className="upcomingShows">
				<div className="titleHolder">
					<h3>Upcoming Shows</h3>
					<p>
						<small>View All</small>
					</p>
				</div>
				<div className="eventHolder">
					<Event />					
				</div>
			</div>
		</div>
	)
}

export default Events;
