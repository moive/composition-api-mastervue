<template>
	<div class="w-3/5">
		<h1 class="text-3xl font-bold mb-7">Create an event</h1>
		<form @submit.prevent="sendForm">
			<DropdownSelect
				label="Select a category"
				v-model="category"
				:options="categories"
				:error="errors.category"
			/>
			<fieldset class="mt-5">
				<legend class="font-bold">Name & describe your event</legend>
				<TextInput v-model="title" label="Title" :error="errors.title" />

				<TextInput
					v-model="description"
					label="Description"
					data-des="1"
					:error="errors.description"
				/>
			</fieldset>
			<fieldset class="mt-5">
				<legend class="font-bold">Where is your event?</legend>

				<TextInput
					v-model="location"
					label="Location"
					:error="errors.location"
				/>
			</fieldset>

			<fieldset class="mt-5">
				<legend class="font-bold">Pets</legend>
				<p>Are pets allowed?</p>
				<RadioGroup
					v-model="pets"
					name="pets"
					:options="petOptions"
					vertical
					:error="errors.pets"
				/>
			</fieldset>

			<fieldset class="mt-5">
				<legend class="font-bold">Extras</legend>
				<div>
					<InputCheckbox
						label="Catering"
						v-model="catering"
						:error="errors.music"
					/>
				</div>

				<div>
					<InputCheckbox
						label="Live music"
						v-model="music"
						:error="errors.music"
					/>
				</div>
			</fieldset>
			<div class="my-5">
				<ButtonForm class="btn" type="submit">Submit</ButtonForm>
			</div>
		</form>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { object, string, number, boolean } from 'yup';
import axios from 'axios';

import DropdownSelect from '@/components/global/DropdownSelect.vue';
import InputCheckbox from '@/components/global/InputCheckbox.vue';
import RadioGroup from '@/components/global/RadioGroup.vue';
import TextInput from '@/components/global/TextInput.vue';
import ButtonForm from '@/components/global/ButtonForm.vue';

const categories = ref([
	'sustainability',
	'nature',
	'animal welfare',
	'housing',
	'education',
	'food',
	'community',
]);

const petOptions = ref([
	{ label: 'Yes', value: 1 },
	{ label: 'No', value: 0 },
]);

const validationSchema = object({
	category: string().required(),
	title: string().min(3).required('A cool title is required'),
	description: string().required(),
	location: string(),
	pets: number(),
	catering: boolean(),
	music: boolean(),
});

const { handleSubmit, errors, resetForm } = useForm({
	validationSchema,
	initialValues: {
		category: '',
		title: '',
		description: '',
		location: '',
		pets: 1,
		catering: false,
		music: false,
	},
});

const { value: category } = useField('category');
const { value: title } = useField('title');
const { value: description } = useField('description');
const { value: location } = useField('location');
const { value: pets } = useField('pets');
const { value: catering } = useField('catering');
const { value: music } = useField('music');

const sendForm = handleSubmit((values: unknown) => {
	console.log('submit', values);
	axios
		.post(
			'https://my-json-server.typicode.com/moive/data-json-vue/events',
			values
		)
		.then((response) => console.log('Response', response))
		.catch((err) => console.error('Error', err));
	resetForm();
});
</script>
