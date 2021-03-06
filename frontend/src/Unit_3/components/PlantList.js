import { useState, useEffect } from 'react';
import { StyledPlantList } from '../StyledComponents/StyledPlantList';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { baseURL } from '../../Unit_3/utils/baseURL';
import PlantCard from './PlantCard';
import { Link } from 'react-router-dom';

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

	const renderAddPlants = () => {
		return (
			<div>
				<h1>Let's add some plants!</h1>
				<Link to='/create'>
					<button>Add Plants</button>
				</Link>
			</div>
		);
	};

	return (
		<StyledPlantList>
			{plantList.length === 0 ? renderAddPlants() : renderPlantList()}
		</StyledPlantList>
	);
};

export default PlantList;
