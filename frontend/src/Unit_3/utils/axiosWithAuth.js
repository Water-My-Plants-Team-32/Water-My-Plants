import axios from 'axios';
import { baseURL } from './baseURL';

export const axiosWithAuth = () => {
	const token = window.localStorage.getItem('token');
	console.log(token);

	return axios.create({
		baseURL,
		headers: {
			Authorization: token,
		},
	});
};
