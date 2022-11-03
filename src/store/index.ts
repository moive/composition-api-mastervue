import { createStore } from 'vuex';
import { eventsModule } from '../modules/events/store/index';

export default createStore({
	modules: {
		eventsModule,
	},
});
