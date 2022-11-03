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
		},
		{
			path: ':id',
			name: 'EventDetails',
			props: true,
			component: () => import('./components/EventDetails.vue'),
		},
		{
			path: 'create',
			name: 'EVentCreate',
			component: () => import('./components/EventCreate.vue'),
		},
	],
};

export { eventsRoute };
