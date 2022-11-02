<template>
	<form @submit.prevent="onSubmit">
		<TextInput
			label="Email"
			type="email"
			class="mb-3"
			name="email"
			v-model="email"
			:error="emailError"
		/>
		<!-- <TextInput label="Password" type="password" /> -->
		<ButtonForm type="submit" class="btn mt-5">Submit</ButtonForm>
	</form>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

import TextInput from '@/components/global/TextInput.vue';
import ButtonForm from '@/components/global/ButtonForm.vue';

const onSubmit = () => {
	console.log('testing ...');
};

const { value: email, errorMessage: emailError } = useField(
	'email',
	function (value) {
		if (!value) return 'This field is required';

		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!regex.test(String(value).toLowerCase())) {
			return 'Please enter a valid email address';
		}
		return true;
	}
);
</script>
