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

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useAttrs } from 'vue';
import BaseErrorMessage from '@/modules/global/components/BaseErrorMessage.vue';
import UniqueID from '@/modules/global/utils/UniqueID';
import SetupFormComponent from '@/modules/global/use/SetupFormComponent';

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
