import axios from 'axios';
import { BASE_URL } from './BASE_URL';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { StyledDiv, StyledForm, StyledInput, StyledButton, StyledP } from './styled-components';

// Yup form validation
const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required').min(3,'Username must be 3 chars long.'),
    password: yup.string().min(6, 'Password must be at least 6 chars long.')
})

const initialLogin = { username: "", password: ""}
const initialDisabled = true

export default function Login(props) {
    
    const [disabled, setDisabled] = useState(initialDisabled);
    const [loginErrors, setLoginErrors] = useState(initialLogin);
    const [credentials, setCredentials] = useState(initialLogin);
    
    const change = (event) => {
		const { name, value } = event.target
		yup
		.reach(loginSchema, name) // get to this part of the schema
		//we can then run validate using the value
		.validate(value) // validate this value
		.then(() => {
		// happy path and clear the error
		setLoginErrors({
			...loginErrors,
			[name]: "",
		});
		})
		// if the validation is unsuccessful, we can set the error message to the message
		// returned from yup (that we created in our schema)
		.catch((err) => {
		setLoginErrors({
			...loginErrors,
			// validation error from schema
			[name]: err.errors[0],
		});
		});

		setCredentials({
			...credentials,
			[name]:value,
		});
	};

    useEffect(() => {
		loginSchema.isValid(credentials).then((valid) => {
			setDisabled(!valid);
		})
	}, [credentials])


    
    const login = (e) => {
		e.preventDefault();
		axios
			.post(
				`${BASE_URL}/login`,
				`grant_type=password&username=${credentials.username}&password=${credentials.password}`,
				{
					headers: {
						// btoa is converting our client id/client secret into base64
						Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
						"Content-Type": "application/x-www-form-urlencoded",
					},
				},
			)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem("token", res.data.access_token);
				// localStorage.setItem("token", res.data.id);
				props.history.push("/plants");
                console.log(credentials)
			});
	};

    return (
        <StyledDiv>
            <h1>Login</h1>
            <StyledForm onSubmit={login}>
                <StyledInput 
                    name='username'
                    type='text'
                    value={credentials.username}
                    onChange={change}
                    placeholder='Username'
                />
                <StyledInput 
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={change}
                    placeholder='Password'
                />
                <StyledButton disabled={disabled}>Login</StyledButton>
            </StyledForm>
            <StyledP>{loginErrors.username}</StyledP>
            <StyledP>{loginErrors.password}</StyledP>
        </StyledDiv>
    )
}