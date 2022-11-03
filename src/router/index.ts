import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { homeRoute } from '@/modules/home/router';
import { aboutRoute } from '@/modules/about/router';
import { loginRoute } from '@/modules/login/router';
import { eventsRoute } from '@/modules/events/router';

const routes: Array<RouteRecordRaw> = [
	homeRoute,
	aboutRoute,
	loginRoute,
	eventsRoute,
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
