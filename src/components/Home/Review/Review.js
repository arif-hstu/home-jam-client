import React from 'react';

import './Review.css';
import bennyDayal from '../../../resources/images/bennyDayal.png';
import arrow from '../../../resources/icons/arrow.svg';
import ticket from '../../../resources/icons/ticket.svg';

function Review(props) {
	const { reviewerName, reviewerImg, countryName, countryImg, review } = props.review;
	return (
		<div className="Review">
			<div className="reviewerInfo">
				<div className="imgHolder">
					<img src={reviewerImg} alt="" />
				</div>
				<div className="nameHolder">
					<p>
						{reviewerName}
					</p>
					<div className="details">
						<img src={countryImg} alt={reviewerName} />
						<p>
							{countryName}
						</p>
					</div>
				</div>
			</div>
			<div className="reviewHolder">
				<p>
					{review}
				</p>
			</div> 
		</div>
	)
}

export default Review;