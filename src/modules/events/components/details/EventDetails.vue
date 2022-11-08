<template>
	<p class="text-lg">
		{{ event.time }} on {{ event.date }} @ {{ event.location }}
	</p>
	<p class="text-lg">{{ event.description }}</p>
</template>
<script setup lang="ts">
import { IEvent } from '../../interfaces/event.types';

interface IProps {
	event: IEvent;
}

defineProps<IProps>();
</script>
