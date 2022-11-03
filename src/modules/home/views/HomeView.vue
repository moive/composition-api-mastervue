<template>
	<img alt="Vue logo" src="@/assets/logo.png" />
	<div>
		<p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
		<p>Capacity: {{ capacity }}</p>
		<button
			class="mt-10 bg-green-700 hover:bg-green-800 px-5 py-2 text-white rounded-md"
			@click="increaseCapacity()"
		>
			Increase Capacity
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useEventSpace from '../use/event-space';
import useMapping from '../use/mapping';

export default defineComponent({
	name: 'HomeView',
	components: {},
	setup() {
		const { capacity, attending, spacesLeft, increaseCapacity } =
			useEventSpace();
		const { map, embedId } = useMapping();

		return { capacity, attending, spacesLeft, increaseCapacity, map, embedId };
	},
});
</script>
