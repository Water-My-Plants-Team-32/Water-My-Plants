import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import CreatePlant from './Unit_3/components/CreatePlant';
import PrivateRoute from './Unit_3/utils/PrivateRoute';

import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Fresh App</h1>
			<NavLink exact to='/createplant'> Create Your Plant </NavLink>
			<Route>
				<PrivateRoute exact path='/createplant' component={CreatePlant}/> 
			</Route>
		</div>
	);
}

export default App;
