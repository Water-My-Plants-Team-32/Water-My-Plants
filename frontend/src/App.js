import Login from './Unit_2/Login'
import SignUp from './Unit_2/SignUp'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios'

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

const initialUser = {
	username: '',
	password: ''
};

const initialUserList = [];

function App() {

	const [activeUser, setActiveUser] = useState(initialUser)
	const [loginForm, setLoginForm] = useState(initialUser);
	const [newUser, setNewUser] = useState(initialUser);
	const [userList, setUserList] = useState(initialUserList)

// Login page functions
	const loginChange = (name, value) => {
		setLoginForm({
			...loginForm,
			[name]:value,
		});
	};
	
	const loginSubmit = () => {
		const toLogin = {
			username:loginForm.username.trim(),
			password:loginForm.password.trim()
		};
		setActiveUser(toLogin);
		setLoginForm(initialUser)
	};

		useEffect(() => {
		console.log(activeUser)
	}, [activeUser])


// Sign up page functions
	const signUpChange = (name, value) => {
		setNewUser({
			...newUser,
			[name]:value,
		});
	};

	const signUpSubmit = () => {
		const toRegister = {
			username:newUser.username.trim(),
			password:newUser.password.trim()
		};
		postNewRegister(toRegister);
	};

	const postNewRegister = (toRegister) => {
		axios.post('https://reqres.in/api/users', toRegister)
		.then((res) => {
			setUserList([res.data, ...userList])
			setNewUser(initialUser)
		})
		.catch((err) => {
			console.log(err)
		})
	}

	useEffect(() => {
		console.log(userList)
	}, [userList])

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
			  <SignUp newUser={newUser} change={signUpChange} submit={signUpSubmit} />
          </Route>
          <Route path='/login'>
			  <Login user={loginForm} change={loginChange} submit={loginSubmit}/>
          </Route>
          <Route exact path='/'>
          </Route>
        </Switch>

    </div>
  );
};

export default App;
