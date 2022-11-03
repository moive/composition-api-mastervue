<template>
	<h1 class="text-3xl font-bold mb-5">Create an event</h1>

	<div class="form-container w-3/4">
		<form @submit.prevent="onSubmit">
			<DropdownSelect
				label="Select a category:"
				v-model="event.category"
				:options="categories"
			/>

			<h3 class="text-2xl font-bold mb-4">Name & describe your event</h3>
			<TextInput
				v-model="event.title"
				label="Title"
				type="text"
				placeholder="Title"
			/>

			<TextInput
				v-model="event.description"
				label="Description"
				type="text"
				placeholder="Description"
			/>

			<h3 class="text-2xl font-bold mb-4">Where is your event?</h3>
			<TextInput
				v-model="event.location"
				label="Location"
				type="text"
				placeholder="Location"
			/>

			<h3 class="text-2xl font-bold mb-4">When is your event?</h3>
			<TextInput
				v-model="event.date"
				label="Date"
				type="text"
				placeholder="Date"
			/>

			<TextInput
				v-model="event.time"
				label="Time"
				type="text"
				placeholder="Time"
			/>
			<div class="mt-5">
				<ButtonForm type="submit" class="btn">Submit</ButtonForm>
			</div>
		</form>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

import { IEvent } from '../interfaces/event.types';

import TextInput from '@/modules/global/components/TextInput.vue';
import ButtonForm from '@/modules/global/components/ButtonForm.vue';
import DropdownSelect from '@/modules/global/components/DropdownSelect.vue';

const categories = ref([
	'sustainability',
	'nature',
	'animal welfare',
	'housing',
	'education',
	'food',
	'community',
]);

const event = ref<IEvent>({
	id: '',
	category: '',
	title: '',
	description: '',
	location: '',
	date: '',
	time: '',
	organizer: '',
});

const store = useStore();

event.value.organizer = store.state.eventsModule.user;
event.value.id = uuidv4();

const onSubmit = () => {
	console.log('Event:', event.value);
};
</script>
