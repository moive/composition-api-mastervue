import { ref } from 'vue';

export default function () {
	const map = ref('map');
	const embedId = ref('embedId');

	return { map, embedId };
}
