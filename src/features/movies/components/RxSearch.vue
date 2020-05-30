<template>
  <div>
		<h3>RxJS Search</h3>

		<input
			v-stream:keyup.native="search$"
			placeholder="Search movie..."
			aria-label="Search movie"
		>

		<movie-search-results :movies="movies$"></movie-search-results>	
  </div>
</template>

<script>
import { pluck, filter, switchMap } from 'rxjs/operators';
import movieApi from '@/api/movieDbApi';
import MovieSearchResults from './MovieSearchResults';

export default {
	name: 'RxSearch',
	components: {
		MovieSearchResults,
	},
	domStreams: ['search$'],
	subscriptions() {
		return {
			movies$: this.search$.pipe(
				pluck('event', 'target', 'value'),
				filter(value => value.length > 2),
				// debounceTime(500),
				switchMap(movieApi.searchMovie),
			),
		}
	},
}
</script>