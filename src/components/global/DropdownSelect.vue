<template>
	<label v-if="label" :for="uuid">{{ label }}</label>
	<select
		:value="modelValue"
		:id="uuid"
		:aria-describedby="error ? `${uuid}-error` : ''"
		:aria-invalid="error ? true : false"
		:class="{ error }"
		v-bind="{
			...attrs,
			onChange: updateValue,
		}"
		class="field"
	>
		<option
			v-for="option in options"
			:value="option"
			:key="option"
			:selected="option === modelValue"
		>
			{{ option }}
		</option>
	</select>
	<BaseErrorMessage v-if="error" :id="`${uuid}-error`">
		{{ error }}</BaseErrorMessage
	>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import BaseErrorMessage from '@/components/global/BaseErrorMessage.vue';
import UniqueID from '@/features/UniqueID';
import SetupFormComponent from '@/features/SetupFormComponent';

interface IProps {
	label?: string;
	modelValue: unknown;
	options: string[];
	error?: string;
}

withDefaults(defineProps<IProps>(), {
	label: '',
	error: '',
});

const emit = defineEmits<{
	(e: 'update:modelValue', event: string | boolean): void;
}>();

const attrs = useAttrs();

const uuid = UniqueID().getID();

const { updateValue } = SetupFormComponent(emit);
</script>
