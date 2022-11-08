<template>
	<FlashMessage
		v-if="GStore?.flashMessage"
		:flashMessage="GStore?.flashMessage"
	></FlashMessage>
	<nav class="nav-main">
		<router-link :to="{ name: 'home' }">Home</router-link> |
		<router-link :to="{ name: 'about' }">About</router-link> |
		<router-link :to="{ path: '/events' }">Events</router-link>
	</nav>
	<div class="container mx-auto">
		<div class="flex justify-center flex-col items-center">
			<router-view />
		</div>
	</div>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import FlashMessage from '@/modules/global/components/FlashMessage.vue';
import { keyGStore } from '@/modules/global/utils/keys';
const GStore = inject(keyGStore);
</script>
