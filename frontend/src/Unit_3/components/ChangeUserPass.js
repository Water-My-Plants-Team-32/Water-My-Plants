import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ChangeUserPass = ({ user, setChanging, changeUserPass, setSuccess }) => {
	const initialPasswordState = {
		// password: user.password,
		password: '',
	};

	const [password, setPassword] = useState(initialPasswordState);

	useEffect(() => {
		console.log('password: ', password);
	});

	const handleChange = (event) => {
		const value = event.target.value;
		setPassword({ ...password, [event.target.name]: value });
	};

	const handleChangePassword = (event) => {
		event.preventDefault();
		console.log('userid: ', user.userid);
		axiosWithAuth()
			.put(`/api/users/user/${user.userid}`, password)
			.then((response) => {
				console.log(password);
				changeUserPass(response.data.password);
				setChanging(false);
				setSuccess('Password updated.');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<form onSubmit={handleChangePassword}>
				<input
					name='password'
					type='password'
					value={password.password}
					onChange={handleChange}
				/>
				<button>Change</button>
			</form>
		</>
	);
};
export default ChangeUserPass;
