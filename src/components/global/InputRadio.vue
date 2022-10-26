<template>
	<input
		type="radio"
		class="field-radio"
		:checked="modelValue === value"
		:value="value"
		@change="$emit('update:modelValue', value)"
		v-bind="attrs"
	/>
	<label v-if="label">{{ label }}</label>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
interface IProps {
	label: string;
	modelValue: string | number;
	value: string | number;
}

withDefaults(defineProps<IProps>(), {
	label: '',
	modelValue: '',
});

const attrs = useAttrs();
</script>
