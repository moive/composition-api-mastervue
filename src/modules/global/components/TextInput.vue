<template>
	<label v-if="label" :for="uuid">{{ label }}</label>
	<input
		v-bind="{ ...attrs, onInput: updateValue }"
		:type="type"
		:value="modelValue"
		:placeholder="label"
		:id="uuid"
		:aria-describedby="error ? `${uuid}-error` : ''"
		:aria-invalid="error ? true : false"
		class="field"
		:class="{ error }"
	/>
	<BaseErrorMessage v-if="error" :id="`${uuid}-error`">
		{{ error }}
	</BaseErrorMessage>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

import BaseErrorMessage from '@/modules/global/components/BaseErrorMessage.vue';
import UniqueID from '@/modules/global/utils/UniqueID';
import SetupFormComponent from '@/modules/global/use/SetupFormComponent';

interface IProp {
	label: string;
	type?: string;
	modelValue?: unknown;
	error?: string;
	// $attrs: object;
}

withDefaults(defineProps<IProp>(), {
	label: '',
	type: 'text',
	error: '',
});

const emit = defineEmits<{
	(e: 'update:modelValue', event: string | boolean): void;
}>();

const attrs = useAttrs();
// console.log(attrs);
const { updateValue } = SetupFormComponent(emit);
const uuid = UniqueID().getID();
</script>
