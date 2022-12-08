import { mount } from '@vue/test-utils';
import HomeView from '@/modules/home/views/HomeView.vue';

describe('HomeView', () => {
	test('If button is visible', () => {
		const wrapper = mount(HomeView);
		expect(wrapper.find('button').isVisible()).toBe(true);
	});

	it('By default, capacity data value should be 0', () => {
		const wrapper = mount(HomeView);
		expect(wrapper.html()).toContain('<p>Capacity: 3</p>');
	});

	it('If button is clicked, capacity should be 4', async () => {
		const wrapper = mount(HomeView);
		await wrapper.find('button').trigger('click');
		const textCapacity = wrapper.findAll('p').at(1);

		expect(textCapacity?.text()).toContain('Capacity: 4');
	});
});
