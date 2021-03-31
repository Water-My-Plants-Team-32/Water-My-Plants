import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import {
	StyledForm,
	ContainerDiv,
} from '../StyledComponents/StyledCreatePlant';

const initialState = {
	nickname: '',
	species: '',
	h2oFrequency: '',
};

const CreatePlant = () => {
	const [form, setForm] = useState(initialState);
	const [user, setUser] = useState({});
	const history = useHistory();

	useEffect(() => {
		axiosWithAuth()
			.get('/api/users/getuserinfo')
			.then((response) => {
				console.log(response);
				setUser(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const changeHandler = (event) => {
		const value = event.target.value;
		setForm({ ...form, [event.target.name]: value });
	};

	const submitAddPlant = (e) => {
		e.preventDefault();
		const addPlant = {
			nickname: form.nickname,
			species: form.species,
			h2oFrequency: form.h2oFrequency,
		};
		axiosWithAuth()
			.post(`/api/plants/plant/${user.userid}`, addPlant)
			.then((res) => {
				console.log(res);
				history.push('/plants');
			})
			.catch((err) => console.log(err));
	};

	return (
		<ContainerDiv>
			<h2 style={{ color: 'white' }}>Add Your Plant</h2>
			<StyledForm onSubmit={submitAddPlant}>
				<label>
					Nick Name:
					<input
						type='text'
						name='nickname'
						value={form.nickname}
						onChange={changeHandler}
					/>
				</label>
				<label>
					Species:
					<input
						type='text'
						name='species'
						value={form.species}
						onChange={changeHandler}
					/>
				</label>
				<label>
					h2oFrequency:
					<input
						type='text'
						name='h2oFrequency'
						value={form.h2oFrequency}
						onChange={changeHandler}
					/>
				</label>
				<button>Add Plant</button>
			</StyledForm>
		</ContainerDiv>
	);
};

export default CreatePlant;
