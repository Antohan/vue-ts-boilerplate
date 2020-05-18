import { MutationTree } from 'vuex';
import People from '@/services/models/People';
import { PeopleState } from '.';

export const SET_PEOPLE = 'SET_PEOPLE';

/**
 * People store mutations.
 */
const mutations: MutationTree<PeopleState> = {
	/**
	 * Set a people to state.
	 *
	 * @param state 
	 * @param people 
	 */
	[SET_PEOPLE](state, people: People) {
		state.people = people;
	},
};

export default mutations;
