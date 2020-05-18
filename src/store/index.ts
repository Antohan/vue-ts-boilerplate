import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import mutations from './mutations';
import { people } from './people';

Vue.use(Vuex);

export interface RootState {
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
    people,
  },
};

export default new Vuex.Store<RootState>(store);
