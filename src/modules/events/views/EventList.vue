<template>
	<h1 class="text-3xl font-bold">Events for Good</h1>
	<div>
		<router-link to="/events/create" class="text-green-400 mb-5 block"
			>(Create event)</router-link
		>
	</div>
	<div class="events w-1/2">
		<EventCard v-for="event in events" :key="event.id" :event="event" />
		<div class="flex justify-between text-red-700 w-full">
			<router-link
				v-if="page - 1 > 0"
				:to="{ name: 'EventsList', query: { page: page - 1 } }"
				rel="prev"
				>Prev</router-link
			>
			<router-link
				v-if="hasNextPage"
				:to="{ name: 'EventsList', query: { page: page + 1 } }"
				rel="next"
				class="ml-auto"
				>Next</router-link
			>
		</div>
	</div>
</template>
<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import EventCard from './EventCard.vue';

interface IProps {
	page: number;
}

const events = computed(() => store.state.eventsModule.events);
const store = useStore();
const router = useRouter();

const props = defineProps<IProps>();
const page = toRef(props, 'page');

const eventsTotal = computed<number>(
	() => store.state.eventsModule.eventsTotal
);

store
	.dispatch('eventsModule/fetchEvents', { perPage: 3, page: page.value })
	.catch((error: any) => {
		if (error.response && error.response.status === 404) {
			router.push({ name: 'BaseError', params: { error } });
		} else {
			router.push({ name: 'NetworkError' });
		}
	});

const hasNextPage = computed(() => {
	const totalPages = Math.ceil(eventsTotal.value / 3);
	return page.value < totalPages;
});
</script>
<style scoped>
.events {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
