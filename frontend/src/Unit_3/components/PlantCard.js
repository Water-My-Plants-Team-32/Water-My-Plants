import { useState } from 'react';
import PlantEditForm from './PlantEditForm';
import { StyledPlantCard } from '../StyledComponents/StyledPlantCard';

const PlantCard = ({ plantInfo, updatePlantList, updatePlants }) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleDelete = (id) => {
		updatePlantList(id);
	};
	const handleEdit = (newPlant) => {
		setIsEditing(!isEditing);
		// updatePlant(newPlant);
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
						<button className='edit' onClick={() => handleEdit(plantInfo)}>
							Edit
						</button>
						<button
							className='delete'
							onClick={() => handleDelete(plantInfo.id)}
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
