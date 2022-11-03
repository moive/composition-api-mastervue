<template>
	<h1>Create an event</h1>

	<div class="form-container">
		<form @submit.prevent="onSubmit">
			<label>Select a category: </label>
			<select v-model="event.category">
				<option
					v-for="option in categories"
					:value="option"
					:key="option"
					:selected="option === event.category"
				>
					{{ option }}
				</option>
			</select>

			<h3>Name & describe your event</h3>

			<label>Title</label>
			<input v-model="event.title" type="text" placeholder="Title" />

			<label>Description</label>
			<input
				v-model="event.description"
				type="text"
				placeholder="Description"
			/>

			<h3>Where is your event?</h3>

			<label>Location</label>
			<input v-model="event.location" type="text" placeholder="Location" />

			<h3>When is your event?</h3>
			<label>Date</label>
			<input v-model="event.date" type="text" placeholder="Date" />

			<label>Time</label>
			<input v-model="event.time" type="text" placeholder="Time" />

			<button type="submit">Submit</button>
		</form>
	</div>
</template>
<script setup lang="ts">
import { IEvent } from '../interfaces/event.types';
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

const onSubmit = () => {
	console.log('Event:', event.value);
};
</script>
