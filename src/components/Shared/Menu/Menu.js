import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Menu.css';

// import MenuItems from '../MenuItems/MenuItems';

import { MenuOpenContext } from '../../../App';
import menu from '../../../resources/icons/menu.svg';
import { motion } from 'framer-motion';

function Menu() {
	const history = useHistory();
	const [isMenuOpen, setIsMenuOpen] = useContext(MenuOpenContext);

	const menu_variants = {
		open: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: 300 }
	};

	return (
		<div className="Menu">
			<motion.div initial="hidden" animate={isMenuOpen ? "open" : "hidden"}>

				<img
					style={{cursor:'pointer'}} 
					onClick={() => setIsMenuOpen(!isMenuOpen)}  
					src={menu} 
					alt="Menu" 
				/>

				<motion.div className="menu-area" variants={menu_variants}>
					<div className='linkHolder'>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} to='/'>Home</Link>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} to='/expertise'>Expertise</Link>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)}to='/projects'>Projects</Link>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)}to='/blog'>Blog</Link>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)}to='/contact'>Contact Me</Link>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Menu;