import axios from 'axios';

const apiClient = axios.create({
	baseURL:
		'https://my-json-server.typicode.com/moive/composition-api-mastervue',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default {
	getEvents() {
		return apiClient.get('/events');
	},
	getEvent(id: number | string) {
		return apiClient.get('/events/' + id);
	},
};
