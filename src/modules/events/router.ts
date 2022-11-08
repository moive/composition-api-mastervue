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
			name: 'LayoutDetail',
			props: true,
			component: () => import('./components/details/LayoutDetail.vue'),
			children: [
				{
					path: '',
					name: 'EventDetails',
					component: () => import('./components/details/EventDetails.vue'),
				},
				{
					path: 'register',
					name: 'EventRegister',
					component: () => import('./components/details/EventRegister.vue'),
				},
				{
					path: 'edit',
					name: 'EventEdit',
					component: () => import('./components/details/EventEdit.vue'),
				},
			],
		},
		{
			path: 'create',
			name: 'EventCreate',
			component: () => import('./components/EventCreate.vue'),
		},
	],
};

export { eventsRoute };
