import { RouteRecordRaw } from 'vue-router';
const loginRoute: RouteRecordRaw = {
	path: '/login',
	name: 'login',
	component: () => import('./views/LoginForm.vue'),
};

export { loginRoute };
