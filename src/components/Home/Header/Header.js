import React from 'react';
import { Scroll } from "framer";

import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import headerBg from '../../../resources/images/headerBg.png';
import lader from '../../../resources/icons/lader.svg';
import laderInactive from '../../../resources/icons/laderInactive.svg';

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
					width={'100%'}
					height={'208px'}
				>
					<div className="dashboard">
						<div className="active">
							<img src={lader} alt="" />
						</div>
						<div className="default">
							<img src={laderInactive} alt="" />
						</div>
						<div className="default">
								<img src={laderInactive} alt="" />
						</div>
						<div className="default">
								<img src={laderInactive} alt="" />
						</div>
					</div>
				</Scroll>
			</div>
		</div>
	)
}

export default Header;