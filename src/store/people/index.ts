import { Module, createNamespacedHelpers } from 'vuex';
import People from "@/services/models/People";
import { RootState } from '..';
import actions from './actions';
import mutations from './mutations';

export interface PeopleState {
	people?: People;
}

/**
 * People state.
 */
const state: PeopleState = {
	people: undefined,
};

/**
 * People module.
 */
export const people: Module<PeopleState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
};

export const peopleStoreHelper = createNamespacedHelpers('people');
