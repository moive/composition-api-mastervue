/* eslint-disable @typescript-eslint/no-explicit-any */
type IPropsEmit = (e: 'update:modelValue', event: string | boolean) => void;

export default function SetupFormComponent(
	emit: IPropsEmit,
	value: string | number = ''
) {
	const updateValue = (event: Event) => {
		const eventTarget = event.target as HTMLInputElement;

		let val: any = eventTarget.value;

		if (eventTarget.type === 'checkbox') val = eventTarget.checked;
		if (eventTarget.type === 'radio') val = value;

		emit('update:modelValue', val);
	};
	return { updateValue };
}
