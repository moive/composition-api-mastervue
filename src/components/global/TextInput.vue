<template>
	<label>{{ label }}</label>
	<input
		v-bind="attrs"
		:type="type"
		:value="modelValue"
		:placeholder="label"
		class="field"
		@input="
			$emit('update:modelValue', ($event.target as HTMLInputElement).value)
		"
	/>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

interface IProp {
	label: string;
	type?: string;
	modelValue: string;
	// $attrs: object;
}

withDefaults(defineProps<IProp>(), {
	label: '',
	type: 'text',
	modelValue: '',
});

const attrs = useAttrs();
console.log(attrs);
</script>
