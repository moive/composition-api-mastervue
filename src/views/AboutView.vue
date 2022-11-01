<template>
	<div class="w-3/5">
		<h1 class="text-3xl font-bold mb-7">Create an event</h1>
		<form @submit.prevent="sendForm">
			<DropdownSelect
				label="Select a category"
				v-model="event.category"
				:options="categories"
				error="This field is required"
			/>
			<fieldset class="mt-5">
				<legend class="font-bold">Name & describe your event</legend>
				<TextInput
					v-model="event.title"
					label="Title"
					error="This field is required"
				/>

				<TextInput
					v-model="event.description"
					label="Description"
					data-des="1"
				/>
			</fieldset>
			<fieldset class="mt-5">
				<legend class="font-bold">Where is your event?</legend>

				<TextInput v-model="event.location" label="Location" data-loc="56" />
			</fieldset>

			<fieldset class="mt-5">
				<legend class="font-bold">Pets</legend>
				<p>Are pets allowed?</p>
				<RadioGroup
					v-model="event.pets"
					name="pets"
					:options="petOptions"
					vertical
				/>
			</fieldset>

			<fieldset class="mt-5">
				<legend class="font-bold">Extras</legend>
				<div>
					<InputCheckbox label="Catering" v-model="event.extras.catering" />
				</div>

				<div>
					<InputCheckbox label="Live music" v-model="event.extras.music" />
				</div>
			</fieldset>
			<div class="my-5">
				<button class="btn" type="submit">Submit</button>
			</div>
		</form>
		<pre>{{ event }}</pre>
	</div>
</template>
<script setup lang="ts">
import axios from 'axios';
import DropdownSelect from '@/components/global/DropdownSelect.vue';
import InputCheckbox from '@/components/global/InputCheckbox.vue';
import RadioGroup from '@/components/global/RadioGroup.vue';
import TextInput from '@/components/global/TextInput.vue';
import { ref } from 'vue';

const categories = ref([
	'sustainability',
	'nature',
	'animal welfare',
	'housing',
	'education',
	'food',
	'community',
]);

const event = ref({
	category: '',
	title: '',
	description: '',
	location: '',
	pets: 1,
	extras: {
		catering: false,
		music: false,
	},
});

const petOptions = ref([
	{ label: 'Yes', value: 1 },
	{ label: 'No', value: 0 },
]);

const sendForm = () => {
	axios
		.post(
			'https://my-json-server.typicode.com/moive/data-json-vue/events',
			event.value
		)
		.then((response) => console.log('Response', response))
		.catch((err) => console.error('Error', err));
};
</script>
