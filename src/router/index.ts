import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { homeRoute } from '@/modules/home/router';
import { aboutRoute } from '@/modules/about/router';
import { loginRoute } from '@/modules/login/router';
import { eventsRoute } from '@/modules/events/router';
import { errorRoute } from '@/modules/error/router';
import NProgress from 'nprogress';

const routes: Array<RouteRecordRaw> = [
	homeRoute,
	...aboutRoute,
	loginRoute,
	eventsRoute,
	...errorRoute,
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach(() => {
	NProgress.start();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
