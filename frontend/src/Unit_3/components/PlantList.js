import { useState, useEffect } from 'react';
import PlantCard from './PlantCard';

import { StyledPlantList } from '../StyledComponents/StyledPlantList';

import { plantsData } from '../../plantData';

const PlantList = () => {
	const [plantList, setPlantList] = useState([]);

	useEffect(() => {
		setPlantList(plantsData);
	}, []);

	const updatePlantList = (id) => {
		const newPlantList = plantList.filter((plant) => plant.id !== id);
		setPlantList(newPlantList);
	};
	const updatePlant = (newPlant) => {};

	const renderPlantList = () => {
		return plantList.map((plant) => (
			<PlantCard
				key={plant.id}
				plantInfo={plant}
				updatePlantList={updatePlantList}
				updatePlant={updatePlant}
			/>
		));
	};

	return <StyledPlantList>{renderPlantList()}</StyledPlantList>;
};

export default PlantList;
