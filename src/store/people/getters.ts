import { GetterTree } from 'vuex';
import { PeopleState } from '.';
import { RootState } from '..';

export const FILMS_COUNT = 'FILMS_COUNT';

/**
 * People store getters.
 */
export const getters: GetterTree<PeopleState, RootState> = {
  /**
   * Get films count.
   *
   * @param state 
   */
  [FILMS_COUNT](state): number {
    return state.people?.films?.length ?? 0;
  }
};