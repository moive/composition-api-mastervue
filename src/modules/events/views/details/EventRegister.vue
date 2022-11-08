<template>
	<p class="text-lg">Register for the event here</p>
	<button class="btn" @click="register">Register Me</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IEvent } from '../../interfaces/event.types';

interface IProps {
	event: IEvent;
}

const props = defineProps<IProps>();

const router = useRouter();
const register = () =>
	router.replace({ name: 'EventDetails', params: { id: props.event.id } });
</script>
