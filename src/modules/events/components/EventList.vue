<template>
	<h1 class="text-3xl font-bold">Events for Good</h1>
	<div>
		<router-link to="/events/create" class="text-green-400 mb-5 block"
			>(Create event)</router-link
		>
	</div>
	<div class="events w-1/2">
		<EventCard v-for="event in events" :key="event.id" :event="event" />
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import EventCard from './EventCard.vue';
import EventService from '../services/Event.services';
import { IEvent } from '../interfaces/event.types';

const events = ref<IEvent[] | null>(null);

EventService.getEvents()
	.then((response) => {
		events.value = response.data;
	})
	.catch((error) => {
		console.log(error);
	});
</script>
<style scoped>
.events {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
