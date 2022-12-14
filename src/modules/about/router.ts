import { RouteRecordRaw } from 'vue-router';
const aboutRoute: RouteRecordRaw[] = [
	{
		path: '/about-us',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('./views/AboutView.vue'),
		alias: '/About',
	},
	{
		path: '/about-custom',
		redirect: { name: 'about' },
	},
];

export { aboutRoute };
