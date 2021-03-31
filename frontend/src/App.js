import Login from './Unit_2/components/Login';
import SignUp from './Unit_2/components/SignUp';
import Home from './Unit_2/components/Home';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import CreatePlant from './Unit_3/components/CreatePlant';
import PrivateRoute from './Unit_3/utils/PrivateRoute';
import PlantList from './Unit_3/components/PlantList';
import { StyledApp } from './Unit_2/StyledComponents/StyledApp';
import { useState } from 'react';
import { axiosWithAuth } from './Unit_3/utils/axiosWithAuth';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem('token') !== null
	);
	const logout = () => {
		axiosWithAuth()
			.get('/api/auth/logout')
			.then(() => {
				localStorage.removeItem('token');
				setIsLoggedIn(false);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	};

	return (
		<div className='app'>
			<StyledApp>
				<Link to='/'>
					<h2>Water My Plants!</h2>
				</Link>
				<nav>
					{isLoggedIn ? (
						<>
							<Link to='/'>
								<button
									onClick={logout}
								>
									Logout
								</button>
							</Link>
							<Link to='/create'>
								<button>Add Plant</button>
							</Link>
						</>
					) : (
						<>
							<Link to='/login'>
								<button>
									Login
								</button>
							</Link>
							<Link to='/signup'>
								<button>Sign Up</button>
							</Link>
						</>
					)}
				</nav>
			</StyledApp>
			<Switch>
				<PrivateRoute path='/plants' component={PlantList} />
				<PrivateRoute exact path='/create' component={CreatePlant} />
				<Route path='/signup' component={SignUp} />
				<Route path='/login'>
					<Login setIsLoggedIn={setIsLoggedIn} />
				</Route>
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
