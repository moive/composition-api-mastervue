<template>
	<div v-if="event">
		<h1>{{ event.title }}</h1>
		<p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
		<p>{{ event.description }}</p>
	</div>
</template>
<script setup lang="ts">
import EventService from '@/services/Event.services';
import { toRefs, ref } from 'vue';
import { IEvent } from '@/interfaces/event.types';

interface IProps {
	id: string;
}

const props = withDefaults(defineProps<IProps>(), {});

const { id } = toRefs(props);
const event = ref<IEvent | null>(null);

EventService.getEvent(id.value)
	.then((response) => {
		event.value = response.data;
	})
	.catch((error) => {
		console.log(error);
	});
</script>
