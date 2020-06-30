import { MutationTree } from 'vuex';
import { AuthState } from '@/store/auth/index';

/**
 * Auth store mutations.
 */
const mutations: MutationTree<AuthState> = {
  setToken(state, token: string) {
    state.token = token;
  }
};

export default mutations;
