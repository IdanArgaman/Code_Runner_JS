import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlightjs'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';

Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		javascript
	}
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
