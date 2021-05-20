import React from 'react';
import { useHistory } from 'react-router-dom';

import { Scroll } from 'framer';

import './Events.css';
import Event from '../Event/Event';
import fakeEventData from './fakeEventData';

function Events() {
	const history = useHistory();
	return (
		<div className='Events'>
			<div className="upcomingShows">
				<div className="titleHolder">
					<h3>Upcoming Shows</h3>
					<p>
						<small
							style={{cursor:'pointer'}} 
							onClick={() => history.push('/notFound')}
						>View All</small>
					</p>
				</div>
				<Scroll
					className='scroll'
					direction="horizontal"
					width={'100vw'}
					height={'500px'}
					wheelEnabled={false}
				>
					<div className="eventHolder">
						{
							fakeEventData.map((event, key) => <Event key={key} event={event} />)
						}
					</div>
				</Scroll>
			</div>
		</div>
	)
}

export default Events;
