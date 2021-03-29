
import React from 'react';

import PrivateRoute from './Unit_3/utils/PrivateRoute';


import { Switch, Route } from 'react-router-dom';

import './App.css';
import PlantList from './Unit_3/components/PlantList';

function App() {
	return (
		<div className='App'>
			<h1>Fresh App</h1>

			

			<Switch>
				<Route path='/plants' component={PlantList} />
			</Switch>

		</div>
	);
}

export default App;
