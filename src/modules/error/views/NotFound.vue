<template>
	<h1 class="text-5xl font-bold mb-4">Oops!</h1>
	<h4 class="text-2xl font-bold mb-4">
		The {{ resource }} you're looking for is not here.
	</h4>
	<router-link class="text-rose-600" :to="{ path: '/events' }"
		>Back to the home page</router-link
	>
</template>
<script setup lang="ts">
interface IProps {
	resource?: string;
}

withDefaults(defineProps<IProps>(), {
	resource: 'page',
});
</script>
