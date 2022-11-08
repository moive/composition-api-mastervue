<template>
	<p class="text-lg">Edit the event here</p>
</template>
<script setup lang="ts">
import { IEvent } from '../../interfaces/event.types';

interface IProps {
	event: IEvent;
}

defineProps<IProps>();
</script>
