import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import 'nprogress/nprogress.css';

import { keyGStore } from '@/modules/global/utils/keys';
import GStore from '@/modules/global/utils/GStore';

createApp(App).use(store).use(router).provide(keyGStore, GStore).mount('#app');
