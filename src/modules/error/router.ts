import { RouteRecordRaw } from 'vue-router';
const errorRoute: RouteRecordRaw = {
	path: '/:catchall(.*)',
	name: 'NotFound',
	component: () => import('./views/NotFound.vue'),
};

export { errorRoute };
