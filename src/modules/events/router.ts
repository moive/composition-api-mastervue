import { RouteRecordRaw } from 'vue-router';
const eventsRoute: RouteRecordRaw = {
	path: '/events',
	name: 'Events',
	component: () => import('./views/EventView.vue'),
	children: [
		{
			path: '',
			name: 'EventsList',
			component: () => import('./components/EventList.vue'),
			props: (route) => ({ page: parseInt(route.query.page as string) || 1 }),
		},
		{
			path: ':id',
			name: 'EventDetails',
			props: true,
			component: () => import('./components/EventDetails.vue'),
		},
		{
			path: 'create',
			name: 'EventCreate',
			component: () => import('./components/EventCreate.vue'),
		},
	],
};

export { eventsRoute };
