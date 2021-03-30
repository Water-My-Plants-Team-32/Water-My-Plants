import Login from './Unit_2/Login'
import SignUp from './Unit_2/SignUp'
import Home from './Unit_2/Home'
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import {BASE_URL} from './Unit_2/BASE_URL';
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

const initialUser = {
	username: '',
	password: ''
};

const initialSignUp = {
	username: '',
	telephone: '',
	password: '',
	passwordConfirm: ''
};

const initialUserList = [];


// // Yup form validation
// const loginSchema = yup.object().shape({
//     username: yup.string().required('Username is required').min(3,'Username must be 3 chars long.'),
//     password: yup.string().min(6, 'Password must be at least 6 chars long.')
// })

const signUpSchema = yup.object().shape({
    username: yup.string().required('Username is required').min(3,'Username must be 3 chars long.'),
	telephone: yup.string('Please provide a phone number'),
    password: yup.string().min(6, 'Password must be at least 6 chars long.'),
	passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})


function App() {
	const [signUpErrors, setSignUpErrors] = useState(initialSignUp);
	// const [loginErrors, setLoginErrors] = useState(initialUser);
	// const [activeUser, setActiveUser] = useState(initialUser);
	// const [loginForm, setLoginForm] = useState(initialUser);
	const [newUser, setNewUser] = useState(initialSignUp);
	const [userList, setUserList] = useState(initialUserList);
	const [disabled, setDisabled] = useState(false);

// Login page functions
	// const loginChange = (name, value) => {
		
	// 	yup
	// 	.reach(loginSchema, name) // get to this part of the schema
	// 	//we can then run validate using the value
	// 	.validate(value) // validate this value
	// 	.then(() => {
	// 	// happy path and clear the error
	// 	setLoginErrors({
	// 		...loginErrors,
	// 		[name]: "",
	// 	});
	// 	})
	// 	// if the validation is unsuccessful, we can set the error message to the message
	// 	// returned from yup (that we created in our schema)
	// 	.catch((err) => {
	// 	setLoginErrors({
	// 		...loginErrors,
	// 		// validation error from schema
	// 		[name]: err.errors[0],
	// 	});
	// 	});

	// 	setLoginForm({
	// 		...loginForm,
	// 		[name]:value,
	// 	});
	// };
// Enable button if schema is valid	
	// useEffect(() => {
	// 	loginSchema.isValid(loginForm).then((valid) => {
	// 		setDisabled(!valid);
	// 	})
	// }, [loginForm])

// Login submit
	// const loginSubmit = () => {
	// 	const toLogin = {
	// 		username:loginForm.username.trim(),
	// 		password:loginForm.password.trim()
	// 	};
	// 	setActiveUser(toLogin);
	// 	setLoginForm(initialUser)
	// };

	// 	useEffect(() => {
	// 	console.log(activeUser)
	// }, [activeUser])

	// const setCurrentUser = () => {
	// 	axios.post(`${BASE_URL}/login`)
	// 	.then((res) => {

	// 	})
	// 	.catch((err) => {
			
	// 	})
	// }


// SignUp page functions
	const signUpChange = (name, value) => {
		
		yup
		.reach(signUpSchema, name) // get to this part of the schema
		//we can then run validate using the value
		.validate(value) // validate this value
		.then(() => {
		// happy path and clear the error
		setSignUpErrors({
			...signUpErrors,
			[name]: "",
		});
		})
		// if the validation is unsuccessful, we can set the error message to the message
		// returned from yup (that we created in our schema)
		.catch((err) => {
		setSignUpErrors({
			...signUpErrors,
			// validation error from schema
			[name]: err.errors[0],
		});
		});
		
		setNewUser({
			...newUser,
			[name]:value,
		});
	};

// Enable button if schema is valid	
	useEffect(() => {
		signUpSchema.isValid(newUser).then((valid) => {
			setDisabled(!valid);
		})
	}, [newUser])

// Sign up Submit
	const signUpSubmit = () => {
		const toRegister = {
			username:newUser.username.trim(),
			telephone:newUser.telephone.trim(),
			password:newUser.password.trim(),
		};
		postNewRegister(toRegister);
	};
	
	const postNewRegister = (toRegister) => {
		axios.post(`${BASE_URL}/createnewuser`, toRegister)
		.then((res) => {
			setUserList([res.data, ...userList])
			setNewUser(initialSignUp)
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
		  <Route path='/plants' component={PlantList} />
          <Route path='/signup'>
			  <SignUp newUser={newUser} change={signUpChange} submit={signUpSubmit} disable={disabled} errors={signUpErrors}/>
          </Route>
          <Route path='/login' component={Login}/>
          <Route exact path='/'>
			  <Home />
          </Route>
        </Switch>

    </div>
  );
};


export default App;
