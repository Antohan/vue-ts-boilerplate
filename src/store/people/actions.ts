import { ActionTree, Store, Commit } from "vuex";
import peopleApi from "@/api/peopleApi";
import { PeopleState } from '.';
import { RootState } from '..';

export const GET_PEOPLE = 'GET_PEOPLE';

/**
 * People store actions.
 */
const actions: ActionTree<PeopleState, RootState> = {
	[GET_PEOPLE]({ commit }, id: number): void {
		peopleApi.getPeopleById(id)
			.then(people => commit('setPeople', people));
	},
};

export default actions;