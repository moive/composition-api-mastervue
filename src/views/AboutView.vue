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
			<RadioGroup
				v-model="event.pets"
				name="pets"
				:options="petOptions"
				vertical
			/>

			<h3 class="font-bold mt-5 mb-1">Extras</h3>
			<div>
				<InputCheckbox label="Catering" v-model="event.extras.catering" />
			</div>

			<div>
				<InputCheckbox label="Live music" v-model="event.extras.music" />
			</div>
			<div class="my-5">
				<button class="btn" type="submit">Submit</button>
			</div>
		</form>
	</div>
</template>
<script setup lang="ts">
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
</script>
