<template>
	<div class="w-3/5">
		<h1 class="text-3xl font-bold mb-7">Create an event</h1>
		<form>
			<DropdownSelect
				label="Select a category"
				v-model="event.category"
				:options="categories"
			/>

			<h3 class="font-bold mt-5 mb-1">Name & describe your event</h3>
			<TextInput v-model="event.title" label="Title" />

			<TextInput v-model="event.description" label="Description" data-des="1" />

			<h3 class="font-bold mt-5 mb-1">Where is your event?</h3>

			<TextInput v-model="event.location" label="Location" data-loc="56" />

			<pre>{{ event }}</pre>

			<h3 class="font-bold mt-5 mb-1">Are pets allowed?</h3>
			<div>
				<input
					type="radio"
					class="field-radio"
					v-model="event.pets"
					:value="1"
					name="pets"
				/>
				<label>Yes</label>
			</div>

			<div>
				<input
					type="radio"
					class="field-radio"
					v-model="event.pets"
					:value="0"
					name="pets"
				/>
				<label>No</label>
			</div>

			<h3 class="font-bold mt-5 mb-1">Extras</h3>
			<div>
				<input
					type="checkbox"
					v-model="event.extras.catering"
					class="field-checkbox"
				/>
				<label>Catering</label>
			</div>

			<div>
				<input
					type="checkbox"
					v-model="event.extras.music"
					class="field-checkbox"
				/>
				<label>Live music</label>
			</div>
			<div class="my-5">
				<button class="btn" type="submit">Submit</button>
			</div>
		</form>
	</div>
</template>
<script setup lang="ts">
import DropdownSelect from '@/components/global/DropdownSelect.vue';
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
</script>
