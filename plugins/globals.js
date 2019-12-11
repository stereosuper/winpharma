import Vue from 'vue';
// NOTE: Here's how to import superComponents
import { useSacVue, superWindowVue } from '@stereorepo/sac';

Vue.prototype.$stereosuper = {
    ...Vue.prototype.$stereosuper,
    namespace: 'stereosuper'
};

const isDevEnv = process.env.NODE_ENV !== 'production';
Vue.config.performance = isDevEnv;

// Set Vue.use here
// NOTE: Here's an example of how to use superComponents like superWindowVue
Vue.use(useSacVue);
Vue.use(superWindowVue);

// Set Vue.component here
