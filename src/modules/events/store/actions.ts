import EventServices from '../services/Event.services';
import { IEvent } from '../interfaces/event.types';

export const actions = {
	fetchEvents({ commit }: any) {
		EventServices.getEvents()
			.then((response: any) => {
				commit('SET_EVENTS', response.data);
			})
			.catch((err: any) => {
				console.log(err);
			});
	},
	createEvent({ commit }: any, event: IEvent) {
		EventServices.postEvent(event)
			.then((res: any) => {
				console.log(res);
				commit('ADD_EVENT', res);
			})
			.catch((err: any) => console.error(err));
	},
};
