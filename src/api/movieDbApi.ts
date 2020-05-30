import { MovieResponseDto } from '@/services/dtos/MovieDto';
import { movieListMapper } from '@/services/mappers/movieMapper';
import Movie from '@/services/models/Movie';
import httpClient from './httpClient';

const API_KEY = process.env.VUE_APP_MOVIEDB_API_KEY;

function searchMovie(search = ''): Promise<Movie[]> {
	return httpClient.get<MovieResponseDto>(`/search/movie?api_key=${API_KEY}&query=${search}`)
		.then(({ data }) => movieListMapper(data.results));
}

export default {
	searchMovie,
};
