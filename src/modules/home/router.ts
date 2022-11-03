import { RouteRecordRaw } from 'vue-router';
const homeRoute: RouteRecordRaw = {
	path: '/',
	name: 'home',
	component: () => import('./views/HomeView.vue'),
};

export { homeRoute };
