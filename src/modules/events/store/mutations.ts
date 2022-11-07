import { IEvent } from '../interfaces/event.types';
export const mutations = {
	ADD_EVENT(state: any, event: IEvent) {
		state.events.push(event);
	},
	SET_EVENTS(state: any, events: IEvent) {
		state.events = events;
	},
	SET_EVENTS_TOTAL(state: any, eventsTotal: number) {
		state.eventsTotal = eventsTotal;
	},
	SET_EVENT(state: any, event: IEvent) {
		state.event = event;
	},
};
