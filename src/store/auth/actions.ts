import { ActionTree } from 'vuex';
import { RootState } from '@/store';
import { AuthState } from '@/store/auth/index';
import { authApi } from '@/services/api';

/**
 * Auth store actions.
 */
const actions: ActionTree<AuthState, RootState> = {
  /**
   * Login action.
   *
   * @param commit
   * @param payload
   */
  async login({ commit }, payload: { email: string; password: string }): Promise<void> {
    const token = await authApi.login(payload);

    localStorage.setItem('token', token);
    commit('setToken', token);
  },
};

export default actions;
