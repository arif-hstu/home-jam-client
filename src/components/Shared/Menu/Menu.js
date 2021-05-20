import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Menu.css';

// import MenuItems from '../MenuItems/MenuItems';

import { MenuOpenContext } from '../../../App';
import menu from '../../../resources/icons/menu.svg';
import close from '../../../resources/icons/close.svg';
import { motion } from 'framer-motion';

function Menu() {
	const history = useHistory();
	const [isMenuOpen, setIsMenuOpen] = useContext(MenuOpenContext);
	const [isOverflowHidden, setIsOverflowHidden] = useState(false);


	useEffect(() => {
		isOverflowHidden ? window.document.body.style.overflowY = "hidden" :
			window.document.body.style.overflowY = "visible"
	}, [isOverflowHidden])
	const menu_variants = {
		open: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: '100vw' }
	};

	return (
		<div className="Menu">
			<motion.div initial="hidden" animate={isMenuOpen ? "open" : "hidden"}>
				<img
					id='menuImage'
					style={{cursor:'pointer'}} 
					onClick={() => {
						setIsMenuOpen(!isMenuOpen);
						setIsOverflowHidden(true);
					}}  
					src={menu} 
					alt="Menu" 
				/>
				<motion.div className="menu-area" variants={menu_variants}>
					<img
						style={{cursor: 'pointer'}}
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
							setIsOverflowHidden(false);
						}} 
						id='close' 
						src={close} 
						alt="Cross" />
					<div className='linkHolder'>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} to='/'>Home</Link>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} to='/notFound'>Search</Link>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)}to='/notFound'>Help</Link>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)}to='/notFound'>Account</Link>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Menu;