import React, { useState } from 'react';
import { StyledPlantEditForm } from '../StyledComponents/StyledPlantEditForm';

const PlantEditForm = ({ plantInfo, setIsEditing }) => {
	const initialFormState = {
		name: plantInfo.name,
		species: plantInfo.scientificName,
		watering: plantInfo.watering,
	};

	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		console.log('hi');
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted');
		//  axiosWithAuth().put(URL).then(call props fxn to update plants)
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
						name='name'
						type='text'
						value={formState.name}
						onChange={handleChange}
					/>
					<input
						name='species'
						type='text'
						value={formState.species}
						onChange={handleChange}
					/>
					<input
						name='watering'
						type='number'
						value={formState.watering}
						onChange={handleChange}
					/>
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
