export const getters = {
	getEventById: (state: any) => (id: string) =>
		state.events.find((event: any) => event.id.toString() === id),
};
