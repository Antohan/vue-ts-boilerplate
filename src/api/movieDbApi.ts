import axios from 'axios';
import { MovieResponseDto } from '@/services/dtos/MovieDto';
import { movieListMapper } from '@/services/mappers/movieMapper';
import Movie from '@/services/models/Movie';
import httpClient from './httpClient';

const API_KEY = process.env.VUE_APP_MOVIEDB_API_KEY;
const { CancelToken } = axios;
let cancelRequest: Function;

function searchMovie(search = ''): Promise<Movie[]> {
	if (cancelRequest) {
		cancelRequest();
	}

	return httpClient.get<MovieResponseDto>(`/search/movie?api_key=${API_KEY}&query=${search}`, {
		cancelToken: new CancelToken(cancel => {
			cancelRequest = cancel;
		})
	})
		.then(({ data }) => movieListMapper(data.results));
}

export default {
	searchMovie,
};
