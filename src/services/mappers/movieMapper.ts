import { MovieDto, MovieResponseDto } from '../dtos/MovieDto';
import Movie from '../models/Movie';

export function movieMapper(dto: MovieDto): Movie {
	return new Movie({
		id: dto.id,
		adult: dto.adult,
		backdropPath: dto.backdrop_path,
		genreIds: dto.genre_ids,
		originalLanguage: dto.original_language,
		originalTitle: dto.original_title,
		overview: dto.overview,
		popularity: dto.popularity,
		posterPath: dto.poster_path,
		releaseDate: dto.release_date,
		title: dto.title,
		video: dto.video,
		voteAverage: dto.vote_average,
		voteCount: dto.vote_count,
	});
}

export function movieListMapper(dtos: MovieDto[]): Movie[] {
	return dtos.map(movieMapper);
}
