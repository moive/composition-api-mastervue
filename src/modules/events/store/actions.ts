import EventServices from '../services/Event.services';
import { IEvent } from '../interfaces/event.types';

export const actions = {
	fetchEvent({ commit, state }: any, id: string) {
		const existingEvent = state.events.find((event: IEvent) => event.id === id);

		if (existingEvent) {
			commit('SET_EVENT', existingEvent);
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
	fetchEvents({ commit }: any) {
		return EventServices.getEvents()
			.then((response: any) => {
				commit('SET_EVENTS', response.data);
			})
			.catch((err: any) => {
				throw err;
			});
	},
	createEvent({ commit }: any, event: IEvent) {
		EventServices.postEvent(event)
			.then((res: any) => {
				console.log(res);
				commit('ADD_EVENT', res);
			})
			.catch((err: any) => {
				throw err;
			});
	},
};
