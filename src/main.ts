import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import 'nprogress/nprogress.css';

import { IGlobalMessage } from '@/modules/global/interfaces/types-global';
import { keyGStore } from '@/modules/global/utils/keys';

const GStore = ref<IGlobalMessage>({ flashMessage: null });

createApp(App)
	.use(store)
	.use(router)
	.provide(keyGStore, GStore.value)
	.mount('#app');
