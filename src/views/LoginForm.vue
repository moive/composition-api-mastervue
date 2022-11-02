<template>
	<form @submit.prevent="onSubmit" class="w-3/5">
		<TextInput
			label="Email"
			type="email"
			name="email"
			v-model="email"
			:error="emailError"
		/>
		<TextInput
			label="Password"
			type="password"
			v-model="password"
			:error="passwordError"
		/>
		<ButtonForm type="submit" class="btn mt-5">Submit</ButtonForm>
	</form>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';

import TextInput from '@/components/global/TextInput.vue';
import ButtonForm from '@/components/global/ButtonForm.vue';

const validations = {
	email: (value: any) => {
		if (!value) return 'This field is required';

		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!regex.test(String(value).toLowerCase())) {
			return 'Please enter a valid email address';
		}
		return true;
	},
	password: (value: any) => {
		const requiredMessage = 'This field is required';

		if (value === undefined || value === null) return requiredMessage;
		if (!String(value).length) return requiredMessage;

		return true;
	},
};

const { handleSubmit } = useForm({
	validationSchema: validations,
});

const onSubmit = handleSubmit((values) => {
	console.log('submit', values);
});

const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');
</script>
