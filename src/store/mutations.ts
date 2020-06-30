import { MutationTree } from 'vuex';
import { RootState } from '.';

/**
 * Root store mutations.
 */
const mutations: MutationTree<RootState> = {
	/**
	 * Set loading state.
	 *
	 * @param state
	 * @param isLoading
	 */
	setLoading(state, isLoading: boolean) {
		state.loading = isLoading;
	},
};

export default mutations;
