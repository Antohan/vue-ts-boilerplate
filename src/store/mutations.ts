import { MutationTree } from 'vuex';
import { RootState } from '.';

export const SET_LOADING = 'SET_LOADING';

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
	[SET_LOADING](state, isLoading: boolean) {
		state.loading = isLoading;
	},
};

export default mutations;