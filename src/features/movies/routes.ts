import { RouteConfig } from 'vue-router';

const moviePage = () => import(/* webpackChunkName: "MoviePage" */ './pages/MoviePage.vue');

/**
 * People feature routes.
 */
const routes: Array<RouteConfig> = [
	{
		path: '/movie',
		name: 'movie',
		component: moviePage,
	}
]

export default routes;