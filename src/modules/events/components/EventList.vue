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
import { computed } from 'vue';

import EventCard from './EventCard.vue';
import { useStore } from 'vuex';

const events = computed(() => store.state.eventsModule.events);

const store = useStore();
store.dispatch('eventsModule/fetchEvents');
</script>
<style scoped>
.events {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
