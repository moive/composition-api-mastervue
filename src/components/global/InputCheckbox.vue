<template>
	<input
		v-bind="{ ...attrs, onChange: updateValue }"
		type="checkbox"
		:checked="modelValue"
		:id="uuid"
		class="field-checkbox"
	/>
	<label :for="uuid" v-if="label">{{ label }}</label>
	<BaseErrorMessage v-if="error" :id="`${uuid}-error`">
		{{ error }}</BaseErrorMessage
	>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import BaseErrorMessage from './BaseErrorMessage.vue';
import UniqueID from '@/features/UniqueID';
import SetupFormComponent from '@/features/SetupFormComponent';

interface IProps {
	label?: string;
	modelValue?: any;
	error?: string;
}

withDefaults(defineProps<IProps>(), {
	label: '',
	modelValue: false,
	error: '',
});

const emit = defineEmits<{
	(e: 'update:modelValue', event: string | boolean): void;
}>();

const attrs = useAttrs();

const uuid = UniqueID().getID();

const { updateValue } = SetupFormComponent(emit);
</script>
