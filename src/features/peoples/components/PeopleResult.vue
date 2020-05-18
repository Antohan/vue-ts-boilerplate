<template>
  <div>
		<h2>People</h2>
		<div v-if="loading">Loading...</div>
		<pre>{{ people | json }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { peopleStoreHelper } from '@/store/people';
import { json } from '@/utils/filters';

/**
 * Render informatiopn about people.
 */
export default Vue.extend({
	name: 'PeopleResult',
	filters: {
		json,
	},
	computed: {
		...mapState(['loading']),
		...peopleStoreHelper.mapState(['people']),
	},
});
</script>

<style>
pre {
	display: inline-block;
	width: 300px;
	margin: 0 auto;
	text-align: start;
}
</style>