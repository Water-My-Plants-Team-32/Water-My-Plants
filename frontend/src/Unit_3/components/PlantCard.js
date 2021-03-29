import { useState } from 'react';
import PlantEditForm from './PlantEditForm';
import { StyledPlantCard } from '../StyledComponents/StyledPlantCard';

const PlantCard = ({ plantInfo, updatePlantList, updatePlant }) => {
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
				<PlantEditForm plantInfo={plantInfo} setIsEditing={setIsEditing} />
			) : (
				<>
					<h2>{plantInfo.name}</h2>
					<h3>
						<i>{plantInfo.scientificName}</i>
					</h3>
					<img src={plantInfo.img} alt={plantInfo.name} />
					<p>Watering Frequency: {plantInfo.watering} time(s) a day</p>
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
