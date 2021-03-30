import { useState, useEffect } from 'react';
import PlantCard from './PlantCard';

import { StyledPlantList } from '../StyledComponents/StyledPlantList';

import { plantsData } from '../../plantData';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { BASE_URL as baseURL } from '../../Unit_2/BASE_URL';

const PlantList = () => {
	const [plantList, setPlantList] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get(`${baseURL}/api/users/getuserinfo`)
			.then((res) => {
				console.log('plant list res: ', res);
				setPlantList(res.data.plants);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
		// setPlantList(plantsData);
	}, []);

	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get(`${baseURL}/api/plants/plants`)
	// 		.then((res) => {
	// 			console.log('plant list res from plant-controller: ', res);
	// 			// setPlantList(res.data.plants);
	// 		})
	// 		.catch((err) => {
	// 			console.log('err: ', err);
	// 		});
	// 	// setPlantList(plantsData);
	// }, [plantList]);

	const updatePlantList = (id) => {
		const newPlantList = plantList.filter((plant) => plant.id !== id);
		setPlantList(newPlantList);
	};
	const updatePlants = (newPlant) => {
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
				// updatePlants={}
			/>
		));
	};

	return <StyledPlantList>{renderPlantList()}</StyledPlantList>;
};

export default PlantList;
