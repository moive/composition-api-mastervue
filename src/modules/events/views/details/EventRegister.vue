<template>
	<p class="text-lg">Register for the event here</p>
	<button class="btn" @click="register">Register Me</button>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { IEvent } from '../../interfaces/event.types';
import { keyGStore } from '@/modules/global/utils/keys';

interface IProps {
	event: IEvent;
}

const props = defineProps<IProps>();
const router = useRouter();
const GStore = inject(keyGStore, { flashMessage: null });

const register = () => {
	// injected.flashMessage = props.event.title;

	GStore.flashMessage =
		'You are successfully registered for ' + props.event.title;

	setTimeout(() => {
		GStore.flashMessage = '';
	}, 3000);

	router.replace({ name: 'EventDetails', params: { id: props.event.id } });
};
</script>
