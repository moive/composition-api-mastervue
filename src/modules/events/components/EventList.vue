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

import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import EventCard from './EventCard.vue';
const events = computed(() => store.state.eventsModule.events);

const store = useStore();
const router = useRouter();

store.dispatch('eventsModule/fetchEvents').catch((error: any) => {
	router.push({ name: 'BaseError', params: { error } });
});
</script>
<style scoped>
.events {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
