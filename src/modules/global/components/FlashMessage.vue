<template>
	<div
		class="flash-message p-4 text-2xl font-bold text-center"
		v-if="flashMessage"
	>
		{{ flashMessage }}
	</div>
</template>

<script setup lang="ts">
interface IProps {
	flashMessage?: string | null;
}

withDefaults(defineProps<IProps>(), {
	flashMessage: '',
});
</script>

<style scoped>
@keyframes yellowfade {
	from {
		background: yellowgreen;
	}
	to {
		background: transparent;
	}
}

.flash-message {
	animation-name: yellowfade;
	animation-duration: 4s;
}
</style>
