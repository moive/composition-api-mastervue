import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import 'nprogress/nprogress.css';
import { createPinia } from 'pinia';
import 'flowbite';

import { keyGStore } from '@/modules/global/utils/keys';
import GStore from '@/modules/global/utils/GStore';

createApp(App)
	.use(store)
	.use(createPinia())
	.use(router)
	.provide(keyGStore, GStore)
	.mount('#app');
