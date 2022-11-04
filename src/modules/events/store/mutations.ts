import { IEvent } from '../interfaces/event.types';
export const mutations = {
	ADD_EVENT(state: any, event: IEvent) {
		state.events.push(event);
	},
	SET_EVENTS(state: any, events: IEvent) {
		state.events = events;
	},
};
