<template>
	<div class="container mx-auto">
		<div class="flex justify-center flex-col items-center">
			<img alt="Vue logo" src="../assets/logo.png" />
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
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from 'vue';

export default defineComponent({
	name: 'HomeView',
	components: {},
	setup() {
		const state: any = reactive({
			capacity: 3,
			attending: ['Tim', 'Bob', 'Joe'],
			spacesLeft: computed(() => state.capacity - state.attending.length),
		});

		function increaseCapacity() {
			state.capacity++;
		}

		return { ...toRefs(state), increaseCapacity };
	},
});
</script>
