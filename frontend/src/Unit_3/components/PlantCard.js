import { useState } from 'react';
import PlantEditForm from './PlantEditForm';
import { StyledPlantCard } from '../StyledComponents/StyledPlantCard';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const PlantCard = ({ plantInfo, updatePlantList, updatePlants }) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleDelete = (id) => {
		axiosWithAuth()
			.delete(`/api/plants/plant/${id}`)
			.then((res) => {
				console.log('delete res: ', res);
				updatePlantList(id);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	};
	const handleEdit = () => {
		setIsEditing(!isEditing);
	};

	return (
		<StyledPlantCard>
			{isEditing ? (
				<PlantEditForm
					plantInfo={plantInfo}
					setIsEditing={setIsEditing}
					updatePlants={updatePlants}
				/>
			) : (
				<>
					<h2>{plantInfo.nickname}</h2>
					<h3>
						<i>{plantInfo.species}</i>
					</h3>
					<img src={plantInfo.img} alt={plantInfo.name} />
					<p>Watering Frequency: {plantInfo.h2ofrequency}</p>
					<div className='card-btn-container'>
						<button className='edit' onClick={() => handleEdit()}>
							Edit
						</button>
						<button
							className='delete'
							onClick={() => handleDelete(plantInfo.plantid)}
						>
							Delete
						</button>
					</div>
				</>
			)}
		</StyledPlantCard>
	);
};

export default PlantCard;
