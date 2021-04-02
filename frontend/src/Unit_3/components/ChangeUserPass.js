import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ChangeUserPass = ({ user, setChanging, changeUserPass, setSuccess }) => {
	const initialPasswordState = {
		// password: user.password,
		password: '',
	};

	const [password, setPassword] = useState(initialPasswordState);

	const handleChange = (event) => {
		const value = event.target.value;
		setPassword({ ...password, [event.target.name]: value });
	};

	const handleChangePassword = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.put(`/api/users/user/${user.userid}`, password)
			.then((response) => {
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
