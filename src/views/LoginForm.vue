<template>
	<form @submit.prevent="onSubmit">
		<TextInput label="Email" type="email" class="mb-3" />
		<TextInput label="Password" type="password" />
		<ButtonForm type="submit" class="btn mt-5">Submit</ButtonForm>
	</form>
</template>

<script setup lang="ts">
import TextInput from '@/components/global/TextInput.vue';
import ButtonForm from '@/components/global/ButtonForm.vue';

const onSubmit = () => {
	console.log('testing ...');
};
</script>
