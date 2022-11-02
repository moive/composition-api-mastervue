<template>
	<h1>Events for Good</h1>
	<div class="events">
		<EventCard v-for="event in events" :key="event.id" :event="event" />
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import EventCard from '@/components/event/EventCard.vue';
import EventService from '@/services/Event.services';
import { IEvent } from '@/interfaces/event.types';

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
