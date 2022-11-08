<template>
	<div v-if="event" class="text-center mt-10">
		<h1 class="text-3xl font-bold mb-3">{{ event.title }}</h1>
		<nav class="navbar-event">
			<router-link :to="{ name: 'EventDetails' }">Details</router-link>
			<span>|</span>
			<router-link :to="{ name: 'EventRegister' }">Register</router-link>
			<span>|</span>
			<router-link :to="{ name: 'EventEdit' }">Edit</router-link>
		</nav>
		<router-view :event="event"></router-view>
	</div>
</template>
<script setup lang="ts">
import { toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

interface IProps {
	id: string;
}

const props = withDefaults(defineProps<IProps>(), {});

const { id } = toRefs(props);
const store = useStore();
const router = useRouter();
const event = computed(() => store.state.eventsModule.event);
store.dispatch('eventsModule/fetchEvent', id.value).catch((error: any) => {
	router.push({ name: 'BaseError', params: { error } });
});
</script>
