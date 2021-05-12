import React from 'react';
import { Scroll } from "framer";

import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import headerBg from '../../../resources/images/headerBg.png';
import lader from '../../../resources/icons/lader.svg';
import laderInactive from '../../../resources/icons/laderInactive.svg';
import heart from '../../../resources/icons/heart.svg';
import events from '../../../resources/icons/events.svg';

function Header() {
	return (
		<div className='Header'>
			<Navbar />
			<div className="overlay">
			</div>
			<div className="mainContent">
				<div className="titleHolder">
					<h2>Cari Cari</h2>
					<p>Live from their sofa to yours. Get closer to your favorite <br />artists, and never miss out.</p>
				</div>
				<Scroll
					className='scroll'
					direction="horizontal"
					height={'208px'}
					width={'100vw'}
					wheelEnabled={false}
				>
					<div className="dashboardHolder">
						<div className="dashboard">
							<div className="active">
								<img src={lader} alt="" />
								<div className="infoHolder">
									<img src={heart} alt="" />
									<p className="counter">
										456
									</p>
									<p className="label">
										<small>Likes everyday</small>
									</p>
								</div>
							</div>
							<div className="default">
								<img src={laderInactive} alt="" />
								<div className="infoHolder">
									<img src={events} alt="" />
									<p className="counter">
										0
									</p>
									<p className="label">
										<small>Label</small>
									</p>
								</div>
							</div>
							<div className="default">
								<img src={laderInactive} alt="" />
								<div className="infoHolder">
									<img src={events} alt="" />
									<p className="counter">
										0
									</p>
									<p className="label">
										<small>Label</small>
									</p>
								</div>
							</div>
							<div className="default">
								<img src={laderInactive} alt="" />
								<div className="infoHolder">
									<img src={events} alt="" />
									<p className="counter">
										0
									</p>
									<p className="label">
										<small>Label</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</Scroll>
			</div>
		</div>
	)
}

export default Header;