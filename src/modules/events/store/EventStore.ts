import { defineStore } from 'pinia';
import { IEvent } from '../interfaces/event.types';
import EventServices from '../services/Event.services';

export const useEventStore = defineStore('EventStore', {
	state: () => ({
		events: [] as IEvent[],
		event: {} as IEvent,
		eventsTotal: 0,
	}),
	getters: {
		numberOfEvents: (state) => state.events.length,
		getEventById: (state: any) => (id: string) =>
			state.events.find((event: any) => event.id.toString() === id),
	},
	actions: {
		fetchEvent(id: string) {
			const event = this.getEventById(id);

			if (event) {
				this.event = event;
			} else {
				return EventServices.getEvent(id)
					.then((response) => {
						this.event = response.data;
					})
					.catch((err) => {
						throw err;
					});
			}
		},
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
