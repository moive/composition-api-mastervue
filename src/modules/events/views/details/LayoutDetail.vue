<template>
	<div v-if="event" class="text-center mt-10">
		<h1 class="text-3xl font-bold mb-3">{{ event.title }}</h1>
		<nav class="navbar-event mb-5">
			<router-link :to="{ name: 'EventDetails' }">Details</router-link>
			<span class="mx-2">|</span>
			<router-link :to="{ name: 'EventRegister' }">Register</router-link>
			<span class="mx-2">|</span>
			<router-link :to="{ name: 'EventEdit' }">Edit</router-link>
		</nav>
		<router-view :event="event"></router-view>
	</div>
</template>
<script setup lang="ts">
	import { toRefs, computed } from 'vue';

	import { useRouter } from 'vue-router';

	import { useEventStore } from '../../store/EventStore';

	interface IProps {
		id: string;
	}

	const props = withDefaults(defineProps<IProps>(), {});

	const { id } = toRefs(props);

	const router = useRouter();
	const eventStore = useEventStore();
	const event = computed(() => eventStore.event);
	eventStore.fetchEvent(id.value)?.catch((error: any) => {
		console.log(error);
		if (error.response && error.response.status === 404) {
			router.push({ name: '404Resource', params: { resource: 'event' } });
		} else {
			router.push({ name: 'NetworkError' });
		}
	});
</script>
