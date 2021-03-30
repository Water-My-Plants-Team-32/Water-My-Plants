import Login from './Unit_2/Login'
import SignUp from './Unit_2/SignUp'
import Home from './Unit_2/Home'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './Unit_3/utils/PrivateRoute';
import PlantList from './Unit_3/components/PlantList';
import { StyledHeader, StyledH2, StyledNav, StyledNavButton } from './Unit_2/styled-components';

function App() {
	return (
    <div className='app'>
        <StyledHeader>
          <Link to='/'>
		  	<StyledH2>Water My Plants!</StyledH2>
		  </Link>
          <StyledNav>
            <Link to='/login'>
            	<StyledNavButton style={{color:'white', backgroundColor:'greenyellow'}}>Login</StyledNavButton>
            </Link>  
            <Link to='/signup'>
            	<StyledNavButton>Sign Up</StyledNavButton>
            </Link>
          </StyledNav>
        </StyledHeader>
        <Switch>
		  <Route path='/plants' component={PlantList} />
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={Home}/>
        </Switch>
    </div>
  );
};


export default App;
