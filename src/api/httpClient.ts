import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://swapi.dev/api',
	// API request timeout set to 30s
	timeout: 30 * 1000,
});

export default instance;