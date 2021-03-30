import Login from './Unit_2/Login'
import SignUp from './Unit_2/SignUp'
import Home from './Unit_2/Home'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import PrivateRoute from './Unit_3/utils/PrivateRoute';
import PlantList from './Unit_3/components/PlantList';

const StyledHeader = styled.header`
  display:flex;
  justify-content: space-around;
  align-items:center;
`;

const StyledH2 = styled.h2`
  color: greenyellow;
  font-size:1.8rem;
  font-style:italic;
  text-decoration:none;
`;

const StyledNav = styled.nav`
  width: 50%;
  text-align:end;
`;

const StyledNavButton = styled.button`
  width: 15%;
  margin: 4% 1%;
  padding:10px;
  font-size: 1.2rem;
  border-radius: 10rem;
  border: none;
  outline:none;
`;

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
