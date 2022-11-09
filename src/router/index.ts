import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { homeRoute } from '@/modules/home/router';
import { aboutRoute } from '@/modules/about/router';
import { loginRoute } from '@/modules/login/router';
import { eventsRoute } from '@/modules/events/router';
import { errorRoute } from '@/modules/error/router';
import NProgress from 'nprogress';
import GStore from '@/modules/global/utils/GStore';

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
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) return savedPosition;
		return { top: 0 };
	},
});

router.beforeEach((to: any, from: any) => {
	NProgress.start();

	const notAuthorized = true;
	if (to.meta.requireAuth && notAuthorized) {
		GStore.flashMessage = 'Sorry, you are not authorized to view this page.';

		setTimeout(() => {
			GStore.flashMessage = '';
		}, 3000);

		console.log(from);

		if (from.href) {
			return false;
		} else {
			return { path: '/' };
		}
	}
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
