import Login from './Unit_2/Login'
import SignUp from './Unit_2/SignUp'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

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
  width: 10%;
  margin: 4% 1%;
  padding:1% 0;
  border-radius: 15%;
  border: none;
`;

function App() {
  return (
    <div className='app'>
        <StyledHeader>
          <StyledH2>Water My Plants!</StyledH2>
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
			  <SignUp />
          </Route>
          <Route path='/login'>
			  <Login />
          </Route>
          <Route exact path='/'>
          </Route>
        </Switch>

    </div>
  );
};

export default App;
