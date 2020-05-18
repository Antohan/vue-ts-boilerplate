import { RouteConfig } from 'vue-router';

const peoplePage = () => import(/* webpackChunkName: "PeoplePage" */ './pages/PeoplePage.vue');

/**
 * People feature routes.
 */
const routes: Array<RouteConfig> = [
	{
		path: '/people',
		name: 'people',
		component: peoplePage,
	}
]

export default routes;
