<template>
	<h1 class="text-3xl font-bold mb-5">Create an event</h1>

	<div class="form-container w-3/4">
		<form @submit.prevent="onSubmit">
			<DropdownSelect
				label="Select a category:"
				v-model="event.category"
				:options="categories"
			/>
			<fieldset class="mb-5 mt-5">
				<legend class="text-2xl font-bold mb-4">
					Name & describe your event
				</legend>

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
			</fieldset>
			<fieldset class="mb-5">
				<legend class="text-2xl font-bold mb-4">Where is your event?</legend>
				<TextInput
					v-model="event.location"
					label="Location"
					type="text"
					placeholder="Location"
				/>
			</fieldset>
			<fieldset class="mb-5">
				<legend class="text-2xl font-bold mb-4">When is your event?</legend>
				<TextInput
					v-model="event.date"
					label="Date"
					type="text"
					placeholder="Date"
				/>
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
			<fieldset>
				<DropdownSelect
					label="Select Time:"
					textSelectedDefaul="Select Time"
					v-model="event.time"
					:options="itemsTime"
				/>
			</fieldset>
			<div class="mt-5">
				<ButtonForm type="submit" class="btn">Submit</ButtonForm>
			</div>
		</form>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

import { IEvent } from '../interfaces/event.types';

import TextInput from '@/modules/global/components/TextInput.vue';
import ButtonForm from '@/modules/global/components/ButtonForm.vue';
import DropdownSelect from '@/modules/global/components/DropdownSelect.vue';
import RadioGroup from '@/modules/global/components/RadioGroup.vue';

const categories = ref([
	'sustainability',
	'nature',
	'animal welfare',
	'housing',
	'education',
	'food',
	'community',
]);

const itemsTime = ref<any[]>([]);

for (let i = 1; i < 25; i++) {
	itemsTime.value.push(i + ':00');
}

const petOptions = ref([
	{ label: 'Yes', value: 1 },
	{ label: 'No', value: 0 },
]);

const event = ref<IEvent>({
	id: '',
	category: '',
	title: '',
	description: '',
	location: '',
	date: '',
	time: '',
	pets: 1,
	organizer: '',
});

const store = useStore();
const router = useRouter();

const onSubmit = () => {
	const payload = {
		...event.value,
		organizer: store.state.eventsModule.user,
		id: uuidv4(),
	};
	// console.log('Event:', event.value);
	store
		.dispatch('eventsModule/createEvent', payload)
		.then(() =>
			router.push({ name: 'EventDetails', params: { id: payload.id } })
		)
		.catch((error: any) => {
			router.push({ name: 'BaseError', params: { error } });
		});
};
</script>
