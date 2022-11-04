<template>
	<div v-if="event" class="text-center mt-10">
		<h1 class="text-3xl font-bold mb-3">{{ event.title }}</h1>
		<p class="text-lg">
			{{ event.time }} on {{ event.date }} @ {{ event.location }}
		</p>
		<p class="text-lg">{{ event.description }}</p>
	</div>
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { useStore } from 'vuex';

interface IProps {
	id: string;
}

const props = withDefaults(defineProps<IProps>(), {});

const { id } = toRefs(props);
const store = useStore();

const event = computed(() => store.state.eventsModule.event);
store.dispatch('eventsModule/fetchEvent', id.value);
</script>
