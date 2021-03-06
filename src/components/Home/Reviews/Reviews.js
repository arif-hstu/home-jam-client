import React from 'react';
import { useHistory } from 'react-router-dom';
import { Scroll } from 'framer';

import './Reviews.css';
import Review from '../Review/Review';
import fakeReviewData from './fakeReviewData';
import leftArrow from '../../../resources/icons/leftArrow.svg';
import rightArrow from '../../../resources/icons/rightArrow.svg';

function Reviews() {
	const history = useHistory();
	return (
		<div className='Reviews'>
			<div className="allReviews">
				<div className="titleHolder">
					<h3>Reviews</h3>
					<div className="pagination">
						<p>1</p>
						<p>/ 12</p>
						<img
							style={{cursor:'pointer'}} 
							onClick={() => history.push('/notFound')} 
							src={leftArrow} 
							alt="Arrow" 
						/>
						<img
							style={{cursor:'pointer'}} 
							onClick={() => history.push('/notFound')} 
							src={rightArrow} 
							alt="Arrow" 
						/>
					</div> 
				</div>
				<Scroll
					className='scroll'
					direction="horizontal"
					width={'100vw'}
					height={'260px'}
					wheelEnabled={false}
				>
					<div className="reviewHolder">
						{
							fakeReviewData.map((review, key) => <Review key={key} review={review} />)
						}
					</div>
				</Scroll>
			</div>
		</div>
	)
}

export default Reviews;
