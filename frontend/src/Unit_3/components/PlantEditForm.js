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

	const updatePlant = () => {
		// const newPlant = formState
		updatePlants(formState);
	};

	const handleChange = (e) => {
		console.log('hi');
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
		//  axiosWithAuth().put(URL).then(call props fxn to update plants)
		axiosWithAuth()
			.put(`/api/plants/plant/${plantInfo.plantid}`, formState)
			.then((res) => {
				console.log('res: ', res);
				updatePlant();
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
					{/* <input
						name='watering'
						type='number'
						value={formState.watering}
						onChange={handleChange}
					/> */}
					{/* <input type='file' /> */}
					<select name='h2ofrequency' value={plantInfo.h2ofrequency}>
						<option value=''>--Please choose an option--</option>
						<option value='1'>1-3 times a day</option>
						<option value='2'>4-6 times a day</option>
						<option value='3'>1-3 times a week</option>
						<option value='4'>4-6 times a week</option>
						<option value='5'>1-3 times a month</option>
						<option value='6'>4-6 times a month</option>
						<option value='monthly'>monthly</option>
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
