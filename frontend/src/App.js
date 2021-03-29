import Login from './Unit_2/Login'
import SignUp from './Unit_2/SignUp'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react'

const StyledHeader = styled.header`
  display:flex;
  justify-content: space-around;
  align-items:center;
`;

const StyledH2 = styled.h2`
  color: greenyellow;
  font-size:1.8rem;
  font-style:italic;

`;

const StyledNav = styled.nav`
  width: 50%;
  text-align:end;
`;

const StyledNavButton = styled.button`
  width: 15%;
  margin: 4% 1%;
  padding:1%;
  border-radius: 15%;
  border: none;
  outline:none;
`;

const currentUser = {
	username: '',
	password: ''
}

function App() {

	const [activeUser, setActiveUser] = useState(currentUser);
	const [newUser, setNewUser] = useState(currentUser);

	const signUpChange = (name, value) => {
		setNewUser({
			...newUser,
			[name]:value,
		});
	};

	const loginChange = (name, value) => {
		setActiveUser({
			...activeUser,
			[name]:value,
		});
	};

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
          <Route path='/signup'>
			  <SignUp newUser={newUser} change={signUpChange} />
          </Route>
          <Route path='/login'>
			  <Login user={activeUser} change={loginChange}/>
          </Route>
          <Route exact path='/'>
          </Route>
        </Switch>

    </div>
  );
};

export default App;
