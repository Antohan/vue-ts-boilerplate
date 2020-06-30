import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VUE_APP_MOVIEDB_API_URL,
	// API request timeout set to 30s
	timeout: 30 * 1000,
});

export default instance;