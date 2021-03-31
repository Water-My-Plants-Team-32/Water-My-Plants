import Login from './Unit_2/components/Login';
import SignUp from './Unit_2/components/SignUp';
import Home from './Unit_2/components/Home';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './Unit_3/utils/PrivateRoute';
import PlantList from './Unit_3/components/PlantList';
import { StyledApp } from './Unit_2/StyledComponents/StyledApp';

function App() {
	return (
		<div className='app'>
			<StyledApp>
				<Link to='/'>
					<h2>Water My Plants!</h2>
				</Link>
				<nav>
					<Link to='/login'>
						<button >
							Login
						</button>
					</Link>
					<Link to='/signup'>
						<button>Sign Up</button>
					</Link>
				</nav>
			</StyledApp>
			<Switch>
				<Route path='/plants' component={PlantList} />
				<Route path='/signup' component={SignUp} />
				<Route path='/login' component={Login} />
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
