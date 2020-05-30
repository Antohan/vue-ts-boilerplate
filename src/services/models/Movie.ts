/**
 * Movie model.
 */
export default class Movie {
	id: number;
	adult: boolean;
	backdropPath: string;
	genreIds: number[];
	originalLanguage: string;
	originalTitle: string;
	overview: string;
	popularity: number;
	posterPath: number;
	releaseDate: string;
	title: string;
	video: false;
	voteAverage: number;
	voteCount: number;

	constructor(data: Movie) {
		this.id = data.id;
		this.adult = data.adult;
		this.backdropPath = data.backdropPath;
		this.genreIds = data.genreIds;
		this.originalLanguage = data.originalLanguage;
		this.originalTitle = data.originalTitle;
		this.overview = data.overview;
		this.popularity = data.popularity;
		this.posterPath = data.posterPath;
		this.releaseDate = data.releaseDate;
		this.title = data.title;
		this.video = data.video;
		this.voteAverage = data.voteAverage;
		this.voteCount = data.voteAverage;
	}  
}