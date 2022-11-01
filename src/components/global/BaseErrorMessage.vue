<template>
	<p aria-live="assertive" class="errorMessage" :id="id">
		<slot />
	</p>
</template>

<script setup lang="ts">
interface IProps {
	id: string;
}

withDefaults(defineProps<IProps>(), {});
</script>
