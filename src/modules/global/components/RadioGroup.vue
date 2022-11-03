<template>
	<component
		:is="vertical ? 'div' : 'span'"
		:class="{ horizontal: !vertical }"
		v-for="option of options"
		:key="option.value"
	>
		<InputRadio
			:label="option.label"
			:value="option.value"
			:name="name"
			:modelValue="modelValue"
			@update:modelValue="$emit('update:modelValue', $event)"
		/>
	</component>
</template>

<script setup lang="ts">
import InputRadio from './InputRadio.vue';

interface IOption {
	label: string;
	value: string | number;
}

interface IProps {
	options: IOption[];
	name: string;
	modelValue: unknown;
	vertical?: boolean;
	error?: string;
}

withDefaults(defineProps<IProps>(), {
	vertical: false,
	error: '',
});
</script>

<style scoped>
.horizontal {
	margin-right: 20px;
}
</style>
