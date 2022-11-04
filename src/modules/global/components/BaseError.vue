<template>
	<h4 class="text-2xl font-bold mb-4">Oops! There was an error:</h4>
	<p>{{ error }}</p>
</template>
<script setup lang="ts">
interface IProps {
	error: any;
}

defineProps<IProps>();
</script>
