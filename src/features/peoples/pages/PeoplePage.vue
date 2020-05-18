<template>
	<div>
		<form @submit.prevent="submit">
			<label>
				People ID:
				<input
					v-model.number="form.peopleId"
					type="number"
				>
				</label>

			<button type="submit">
				Get people
			</button>
		</form>

		<people-result></people-result>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';
import { peopleStoreHelper } from '@/store/people'
import { SET_LOADING } from '@/store/mutations';
import { GET_PEOPLE } from '@/store/people/actions';
import PeopleResult from '../components/PeopleResult.vue';

/**
 * People page.
 */
export default Vue.extend({
	name: 'PeoplePage',
	components: {
		PeopleResult,
	},
	data: () => ({
		form: {
			peopleId: undefined,
		},
	}),
	methods: {
		...mapMutations({
			setLoading: SET_LOADING,
		}),
		...peopleStoreHelper.mapActions({
			fetchPeople: GET_PEOPLE,
		}),
		async submit() {
			this.setLoading(true);
			await this.fetchPeople(this.form.peopleId);
			this.setLoading(false);
		},
	},
});
</script>