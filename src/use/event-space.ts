import { computed, ref } from 'vue';

export default function useEventSpace() {
	const capacity = ref(3);
	const attending = ref(['Tim', 'Bob', 'Joe']);

	function increaseCapacity() {
		capacity.value++;
	}

	const spacesLeft = computed(() => capacity.value - attending.value.length);

	return { capacity, attending, spacesLeft, increaseCapacity };
}
