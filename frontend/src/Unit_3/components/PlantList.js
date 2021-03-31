import { useState, useEffect } from 'react';
import { StyledPlantList } from '../StyledComponents/StyledPlantList';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { BASE_URL_JAVA as baseURL } from '../../Unit_2/BASE_URL';
import PlantCard from './PlantCard';

const PlantList = () => {
	const [plantList, setPlantList] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get(`${baseURL}/api/users/getuserinfo`)
			.then((res) => {
				setPlantList(res.data.plants);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	}, []);

	const updatePlantList = (id) => {
		const newPlantList = plantList.filter((plant) => plant.plantid !== id);
		setPlantList(newPlantList);
	};

	const updatePlants = (newPlant) => {
		console.log('newPlant: ', newPlant);
		const newPlantList = plantList.map((plant) => {
			if (plant.plantid === newPlant.plantid) {
				return newPlant;
			}
			return plant;
		});
		setPlantList(newPlantList);
	};

	const renderPlantList = () => {
		return plantList.map((plant) => (
			<PlantCard
				key={plant.plantid}
				plantInfo={plant}
				updatePlantList={updatePlantList}
				updatePlants={updatePlants}
			/>
		));
	};

	return <StyledPlantList>{renderPlantList()}</StyledPlantList>;
};

export default PlantList;
