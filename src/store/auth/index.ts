import { Module, createNamespacedHelpers } from 'vuex';
import { User } from '@/models';
import actions from '@/store/auth/actions';
import mutations from '@/store/auth/mutations';
import { RootState } from '..';

export interface AuthState {
  /**
   * Authorization token.
   */
  token?: string;
  /**
   * Logged user.
   */
  user?: User;
}

/**
 * People state.
 */
const state: AuthState = {
  token: localStorage.getItem('token') || undefined,
  user: undefined,
};

/**
 * People module.
 */
export const auth: Module<AuthState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export const authStoreHelper = createNamespacedHelpers('auth');
