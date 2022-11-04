export interface IEvent {
	category: string;
	date: Date | string;
	description: string;
	id: number | string;
	location: string;
	organizer: string;
	pets: number | boolean;
	time: string;
	title: string;
}
