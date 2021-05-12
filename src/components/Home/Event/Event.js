import React, { useState } from 'react';

import './Event.css';
import bennyDayal from '../../../resources/images/bennyDayal.png';
import arrow from '../../../resources/icons/arrow.svg';
import ticket from '../../../resources/icons/ticket.svg';
import ticketFill from '../../../resources/icons/ticketFill.svg';

function Event(props) {
	const { artistImg, artistName, category } = props.event;
	const [alterTicket, setAlterTicket] = useState(false);
	
	return (
		<div className="Event">
			<img src={artistImg} alt={artistName} />
			<p className="highlight">
				{category}
			</p>
			<h4>
				{artistName}
			</h4>
			<div className="infoHolder">
				<div className="info">
					<p>
						More Info
					</p>
					<img src={arrow} alt="Arrow" />
				</div>
				<div
					onMouseEnter={() => setAlterTicket(true)}
					onMouseLeave={() => setAlterTicket(false)}
					className="ticketHolder"
				>
					{
						alterTicket ? 
						<img src={ticketFill} alt="Ticket" /> :
						<img src={ticket} alt="Ticket" />
					}
				</div>
			</div>
		</div>
	)
}

export default Event;