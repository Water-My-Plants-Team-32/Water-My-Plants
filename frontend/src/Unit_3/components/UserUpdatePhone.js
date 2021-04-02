import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserUpdatePhone = ({ user, setIsUpdating, updateUserPhone }) => {
	const initialPhoneState = {
		phonenumber: user.phonenumber,
	};

	const [phone, setPhone] = useState(initialPhoneState);

	const handleChange = (event) => {
		const value = event.target.value;
		setPhone({ ...phone, [event.target.name]: value });
	};

	const handleUpdate = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.put(`/api/users/user/${user.userid}`, phone)
			.then((response) => {
				updateUserPhone(response.data.phonenumber);
				setIsUpdating(false);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<form onSubmit={handleUpdate}>
				<input
					name='phonenumber'
					type='text'
					value={phone.phonenumber}
					onChange={handleChange}
				/>
				<button>Update</button>
			</form>
		</>
	);
};
export default UserUpdatePhone;
