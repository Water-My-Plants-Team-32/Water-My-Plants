import * as yup from 'yup';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from './BASE_URL';
import { StyledDiv, StyledForm, StyledInput, StyledButton, StyledP } from './styled-components';

const signUpSchema = yup.object().shape({
    username: yup.string().required('Username is required').min(3,'Username must be 3 chars long.'),
	telephone: yup.string('Please provide a phone number'),
    password: yup.string().min(6, 'Password must be at least 6 chars long.'),
	passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

const initialDisabled = true
const initialUserList = [];
const initialSignUp = {
	username: '',
	telephone: '',
	password: '',
	passwordConfirm: ''
};


export default function Login(props) {
    
    const [signUpErrors, setSignUpErrors] = useState(initialSignUp);
    const [newUser, setNewUser] = useState(initialSignUp);
	const [userList, setUserList] = useState(initialUserList);
	const [disabled, setDisabled] = useState(initialDisabled);

    const signUpChange = (event) => {
		const { name ,value } = event.target;

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
	const signUpSubmit = (event) => {
		event.preventDefault();
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
        <StyledDiv>
            <h1>Sign Up</h1>
            <StyledForm onSubmit={signUpSubmit}>
                <StyledInput 
                    name='username'
                    type='text'
                    value={newUser.username}
                    onChange={signUpChange}
                    placeholder='Username'
                />
                <StyledInput 
                    name='telephone'
                    type='tel'
                    value={newUser.telephone}
                    onChange={signUpChange}
                    placeholder='Enter a phone number'
                />
                <StyledInput 
                    name='password'
                    type='password'
                    value={newUser.password}
                    onChange={signUpChange}
                    placeholder='Create a password'
                />
                <StyledInput 
                    name='passwordConfirm'
                    type='password'
                    value={newUser.passwordConfirm}
                    onChange={signUpChange}
                    placeholder='Confirm your password'
                />
                <StyledButton disabled={disabled}>Sign Up</StyledButton>
            </StyledForm>
            <StyledP>{signUpErrors.username}</StyledP>
            <StyledP>{signUpErrors.password}</StyledP>
            <StyledP>{signUpErrors.passwordConfirm}</StyledP>
        </StyledDiv>
    )
}