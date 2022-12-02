import { defineStore } from 'pinia';
import { IEvent } from '../interfaces/event.types';
import EventServices from '../services/Event.services';

export const useEventStore = defineStore('EventStore', {
	state: () => ({
		events: [] as IEvent[],
		event: {},
		eventsTotal: 0,
	}),
	getters: {
		numberOfEvents: (state) => state.events.length,
	},
	actions: {
		fetchEvents({ perPage, page }: any) {
			return EventServices.getEvents(perPage, page)
				.then((response: any) => {
					this.events = response.data;
					console.log(response.data);
					this.eventsTotal = response.headers['x-total-count'];
				})
				.catch((err: any) => {
					throw err;
				});
		},
		createEvent(event: IEvent) {
			return EventServices.postEvent(event)
				.then(({ data }) => {
					console.log(data);
					this.events.push(data);
				})
				.catch((err: any) => {
					throw err;
				});
		},
	},
});
