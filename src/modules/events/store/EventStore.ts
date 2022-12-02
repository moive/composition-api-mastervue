import { defineStore } from 'pinia';
import EventServices from '../services/Event.services';

export const useEventStore = defineStore('EventStore', {
	state: () => ({
		events: [],
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
	},
});
