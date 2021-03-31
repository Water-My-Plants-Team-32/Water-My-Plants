import React, { useState } from 'react';
import { StyledPlantEditForm } from '../StyledComponents/StyledPlantEditForm';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const PlantEditForm = ({ plantInfo, setIsEditing, updatePlants }) => {
	const initialFormState = {
		nickname: plantInfo.nickname,
		species: plantInfo.species,
		h2ofrequency: plantInfo.h2ofrequency,
	};

	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
		axiosWithAuth()
			.put(`/api/plants/plant/${plantInfo.plantid}`, formState)
			.then((res) => {
				updatePlants({ ...formState, plantid: plantInfo.plantid });
				setIsEditing(false);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	};
	const handleCancel = (e) => {
		e.preventDefault();
		setFormState(initialFormState);
		setIsEditing(false);
	};
	return (
		<>
			<StyledPlantEditForm onSubmit={handleSubmit}>
				<div className='form-input-container'>
					<input
						name='nickname'
						type='text'
						value={formState.nickname}
						onChange={handleChange}
					/>
					<input
						name='species'
						type='text'
						value={formState.species}
						onChange={handleChange}
					/>
					<select
						name='h2ofrequency'
						value={plantInfo.h2ofrequency}
						onChange={handleChange}
					>
						<option value=''>--Please choose an option--</option>
						<option value='daily'>Daily</option>
						<option value='twice-daily'>Twice daily</option>
						<option value='weekly'>Weekly</option>
						<option value='twice-weekly'>Twice weekly</option>
						<option value='monthly'>Monthly</option>
						<option value='twice-monthly'>Twice Monthly</option>
						<option value='bimonthly'>Bimonthly</option>
						<option value='never'>never</option>
					</select>
				</div>
				<div className='card-btn-container'>
					<button type='submit' value='submit' className='submit-btn'>
						Submit
					</button>
					<button className='cancel-btn' value='cancel' onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</StyledPlantEditForm>
		</>
	);
};

export default PlantEditForm;
