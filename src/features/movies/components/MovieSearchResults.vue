<template>
  <div>
    <ul
      v-if="movies.length"
      :class="$style.list"
    >
      <li
        v-for="movie in movies"
        :key="movie.id"
        :class="$style.listItem"
      >
        {{ movie.originalTitle }}
      </li>
    </ul>
    <div v-else>No results found</div>
  </div>
</template>

<script>
export default {
  name: 'MovieSearchResults',
  props: {
    movies: { type: Array, default: () => ([]) },
  },
}
</script>

<style lang="scss" module>
.list {
	width: 100%;
	list-style: none;
	padding: 0;
	text-align: left;
	display: flex;
	flex-wrap: wrap;
}

.listItem {
	display: inline;
	background-color: tomato;
	color: white;
	padding: 10px;
	margin: 10px;
}
</style>