import axios from 'axios';
import { baseURL } from './baseURL';

export const axiosWithAuth = () => {
	const token = window.localStorage.getItem('token');

	return axios.create({
		baseURL,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
