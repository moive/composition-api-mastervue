/* eslint-disable eqeqeq */
import NProgress from 'nprogress';
import EventServices from '../services/Event.services';
import { IEvent } from '../interfaces/event.types';

export const actions = {
	fetchEvent({ commit, getters }: any, id: string) {
		const event = getters.getEventById(id);

		if (event) {
			commit('SET_EVENT', event);
		} else {
			return EventServices.getEvent(id)
				.then((response) => {
					commit('SET_EVENT', response.data);
				})
				.catch((err) => {
					throw err;
				});
		}
	},
	fetchEvents({ commit }: any, { perPage, page }: any) {
		NProgress.start();
		return EventServices.getEvents(perPage, page)
			.then((response: any) => {
				commit('SET_EVENTS', response.data);
				commit('SET_EVENTS_TOTAL', response.headers['x-total-count']);
			})
			.catch((err: any) => {
				throw err;
			})
			.finally(() => {
				NProgress.done();
			});
	},
	createEvent({ commit }: any, event: IEvent) {
		return EventServices.postEvent(event)
			.then(({ data }: any) => {
				console.log(data);
				commit('ADD_EVENT', data);
			})
			.catch((err: any) => {
				throw err;
			});
	},
};
