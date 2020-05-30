<template>
  <div :class="$style.host">
		<lodash-search></lodash-search>
		<rx-search></rx-search>
  </div>
</template>

<script>
import LodashSearch from '../components/LodashSearch';
import RxSearch from '../components/RxSearch';

export default {
	components: {
		LodashSearch,
		RxSearch,
	},
}
</script>

<style lang="scss" module>
.host {
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: auto;
}
</style>