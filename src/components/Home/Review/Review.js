import React from 'react';

import './Review.css';
import bennyDayal from '../../../resources/images/bennyDayal.png';
import arrow from '../../../resources/icons/arrow.svg';
import ticket from '../../../resources/icons/ticket.svg';

function Review(props) {
	const { reviewerName, reviewerImg, country, countryImg, review } = props.review;
	return (
		<div className="Review">
			<div className="reviewerInfo">
				<div className="imgHolder">
					<img src={} alt="" />
				</div>
				<div className="nameHolder">
					<p>
						Hellen Jummy
					</p>
					<div className="details">
						<img src={} alt="" />
						<p>
							Country
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review;