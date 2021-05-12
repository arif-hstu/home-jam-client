import React from 'react';

import './Event.css';
import bennyDayal from '../../../resources/images/bennyDayal.png';
import arrow from '../../../resources/icons/arrow.svg';
import ticket from '../../../resources/icons/ticket.svg';

function Event() {
	return (
		<div className='Event'>
			<img src={bennyDayal} alt="Benny Dayal" />
			<p className="highlight">
				Folk
			</p>
			<h4>
				Benny Day al
			</h4>
			<div className="infoHolder">
				<div className="info">
					<p>
						More Info
					</p>
					<img src={arrow} alt="Arrow" />
				</div>
				<div className="ticketHolder">
					<img src={ticket} alt="" /> 
				</div>
			</div>
		</div>
	)
}

export default Event;