import { RouteRecordRaw } from 'vue-router';
const eventsRoute: RouteRecordRaw = {
	path: '/events',
	name: 'Events',
	component: () => import('./views/EventView.vue'),
	children: [
		{
			path: '',
			name: 'EventsList',
			component: () => import('./views/EventList.vue'),
			props: (route) => ({ page: parseInt(route.query.page as string) || 1 }),
		},
		{
			path: ':id',
			name: 'LayoutDetail',
			props: true,
			component: () => import('./views/details/LayoutDetail.vue'),
			children: [
				{
					path: '',
					name: 'EventDetails',
					component: () => import('./views/details/EventDetails.vue'),
				},
				{
					path: 'register',
					name: 'EventRegister',
					component: () => import('./views/details/EventRegister.vue'),
				},
				{
					path: 'edit',
					name: 'EventEdit',
					component: () => import('./views/details/EventEdit.vue'),
					meta: { requireAuth: true },
				},
			],
		},
		{
			path: '/event/:afterEvent(.*)',
			redirect: (to) => ({
				path: '/events/' + to.params.afterEvent,
			}),
		},
		{
			path: 'create',
			name: 'EventCreate',
			component: () => import('./views/EventCreate.vue'),
		},
	],
};

export { eventsRoute };
