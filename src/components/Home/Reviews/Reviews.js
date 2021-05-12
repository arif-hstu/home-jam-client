import React from 'react';
import { Scroll } from 'framer';

import './Reviews.css';
import Event from '../Event/Event';
import fakeReviewData from './fakeReviewData';

function Reviews() {
	return (
		<div className='Reviews'>
			<div className="allReviews">
				<div className="titleHolder">
					<h3>Reviews</h3>
					<p>
						<small>View All</small>
					</p>
				</div>
				<Scroll
					className='scroll'
					direction="horizontal"
					width={'100vw'}
					height={'256px'}
					wheelEnabled={false}
				>
					<div className="eventHolder">
						{
							fakeReviewData.map((event, key) => <Event key={key} event={event} />)
						}
					</div>
				</Scroll>
			</div>
		</div>
	)
}

export default Reviews;
