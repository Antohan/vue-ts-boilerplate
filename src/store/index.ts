import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import mutations from './mutations';
import { auth } from './auth';

Vue.use(Vuex);

export interface RootState {
  /**
   * Stores application loading status.
   */
  loading: boolean;
}

/**
 * Root state.
 */
const state: RootState = {
  loading: false,
};

/**
 * App store.
 */
const store: StoreOptions<RootState> = {
  state,
  mutations,
  modules: {
    auth,
  },
};

export default new Vuex.Store<RootState>(store);
