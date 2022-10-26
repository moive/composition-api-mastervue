<template>
	<label v-if="label">{{ label }}</label>
	<select
		:value="modelValue"
		v-bind="{
      ...attrs, 
      onChange: ($event)=> {
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      }
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
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

interface IProps {
	label?: string;
	modelValue: string;
	options: string[];
}

withDefaults(defineProps<IProps>(), {
	label: '',
	modelValue: '',
});

const attrs = useAttrs();
</script>
