import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

import './Event.css';
import bennyDayal from '../../../resources/images/bennyDayal.png';
import arrow from '../../../resources/icons/arrow.svg';
import ticket from '../../../resources/icons/ticket.svg';
import ticketFill from '../../../resources/icons/ticketFill.svg';

function Event(props) {
	const { artistImg, artistName, category } = props.event;
	const [alterTicket, setAlterTicket] = useState(false);

	const history = useHistory();
	return (
		<div className="Event">
			<img 
				style={{cursor:'pointer'}} 
				onClick={() => history.push('/notFound')}
				src={artistImg} 
				alt={artistName} 
			/>

			<p 
				style={{cursor:'pointer'}} 
				onClick={() => history.push('/notFound')}
				className="highlight">
				{category}
			</p>
			<h4 
				style={{cursor: 'pointer'}} 
				onClick={() => history.push('/notFound')}
			>
				{artistName}
			</h4>
			<div className="infoHolder">
				<div className="info">
					<p onClick={() => history.push('/notFound')}>
						More Info
					</p>
					<img 
						style={{cursor: 'pointer'}} 
						onClick={() => history.push('/notFound')} 
						src={arrow} alt="Arrow" 
					/>
				</div>
				<div
					onMouseEnter={() => setAlterTicket(true)}
					onMouseLeave={() => setAlterTicket(false)}
					className="ticketHolder"
				>
					{
						alterTicket ? 
						<img 
							onClick={() => history.push('/notFound')} 
							src={ticketFill} 
							alt="Ticket" 
						/> :
						<img src={ticket} alt="Ticket" />
					}
				</div>
			</div>
		</div>
	)
}

export default Event;