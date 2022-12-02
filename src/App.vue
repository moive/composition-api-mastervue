<template>
	<FlashMessage
		v-if="GStore?.flashMessage"
		:flashMessage="GStore?.flashMessage"
	></FlashMessage>
	<NavBar></NavBar>

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
import NavBar from './modules/global/components/NavBar.vue';

const GStore = inject(keyGStore);
</script>
