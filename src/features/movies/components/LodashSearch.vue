<template>
  <div>
		<h3>Lodash Search</h3>

		<input
			v-model="searchValue"
			placeholder="Search movie..."
			aria-label="Search movie"
			@input="search($event.target.value)"
		>

		<movie-search-results :movies="movies"></movie-search-results>		
  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import movieApi from '@/api/movieDbApi';
import MovieSearchResults from './MovieSearchResults';

export default {
	name: 'LodashSearch',
	components: {
		MovieSearchResults,
	},
	data: () => ({
		searchValue: '',
		movies: [],
	}),
	methods: {
		search: debounce(async function (value) {
			if (value.length < 2) {
				return;
			}
      this.movies = await movieApi.searchMovie(value) || [];
    }, 500),
	},
}
</script>