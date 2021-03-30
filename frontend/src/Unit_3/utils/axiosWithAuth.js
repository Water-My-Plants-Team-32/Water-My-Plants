import axios from 'axios';
import { BASE_URL as baseURL } from '../../Unit_2/BASE_URL';

export const axiosWithAuth = () => {
	const token = window.localStorage.getItem('token');
	console.log(token);

	return axios.create({
		baseURL,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
