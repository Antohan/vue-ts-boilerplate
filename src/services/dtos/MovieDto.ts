/**
 * Movie DTO.
 */
export interface MovieDto {
	id: number;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: number;
	release_date: string;
	title: string;
	video: false;
	vote_average: number;
	vote_count: number;
};

export interface MovieResponseDto {
	page: number;
	results: MovieDto[];
	total_pages: number;
	total_results: number;
};
