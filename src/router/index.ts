import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginForm.vue'),
	},
	{
		path: '/events',
		name: 'Events',
		component: () => import('../views/EventView.vue'),
		children: [
			{
				path: '',
				name: 'EventsList',
				component: () => import('../components/event/EventList.vue'),
			},
			{
				path: ':id',
				name: 'EventDetails',
				props: true,
				component: () => import('../components/event/EventDetails.vue'),
			},
			{
				path: 'create',
				name: 'EVentCreate',
				component: () => import('../components/event/EventCreate.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
