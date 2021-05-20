import React, { useState, createContext } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import './App.css';

import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';

export const MenuOpenContext = createContext();
function App() {
	const [isMenuOpen, setIsMenuOpen] = useState();
	return (
		<div className="App">
			<MenuOpenContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Home">
							<Home />
						</Route>
					</Switch>
					<Route exact path="/notFound">
						<NotFound />
					</Route>
				</Router>
			</MenuOpenContext.Provider>
		</div>
	);
}

export default App;
