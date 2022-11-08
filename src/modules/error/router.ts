import { RouteRecordRaw } from 'vue-router';
const errorRoute: RouteRecordRaw[] = [
	{
		path: '/:catchall(.*)',
		name: 'NotFound',
		component: () => import('./views/NotFound.vue'),
	},
	{
		path: '/404/:resource',
		name: '404Resource',
		props: true,
		component: () => import('./views/NotFound.vue'),
	},
	{
		path: '/network-error',
		name: 'NetworkError',
		component: () => import('./views/NetworkError.vue'),
	},
];

export { errorRoute };
