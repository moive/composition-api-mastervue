<template>
	<input
		type="radio"
		class="field-radio"
		:checked="modelValue === value"
		:value="value"
		:id="uuid"
		v-bind="{ ...attrs, onChange: updateValue }"
	/>
	<label v-if="label" :for="uuid">{{ label }}</label>
	<BaseErrorMessage v-if="error" :id="`${uuid}-error`">
		{{ error }}
	</BaseErrorMessage>
</template>

<script setup lang="ts">
import { toRefs, useAttrs } from 'vue';
import BaseErrorMessage from '@/components/global/BaseErrorMessage.vue';
import SetupFormComponent from '@/features/SetupFormComponent';
import UniqueID from '@/features/UniqueID';
interface IProps {
	label: string;
	modelValue: string | number;
	value: string | number;
	error?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	label: '',
	modelValue: '',
	error: '',
});

const emit = defineEmits<{
	(e: 'update:modelValue', event: string | boolean): void;
}>();

const attrs = useAttrs();
const { value } = toRefs(props);

const uuid = UniqueID().getID();

const { updateValue } = SetupFormComponent(emit, value.value);
</script>
