<template>
	<input
		type="checkbox"
		:checked="modelValue"
		@change="
			$emit('update:modelValue', ($event.target as HTMLInputElement).checked)
		"
		class="field-checkbox"
	/>
	<label v-if="label">{{ label }}</label>
</template>

<script setup lang="ts">
interface IProps {
	label?: string;
	modelValue?: boolean;
}

withDefaults(defineProps<IProps>(), {
	label: '',
	modelValue: false,
});
</script>
