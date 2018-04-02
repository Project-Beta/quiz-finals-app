import Vue from "vue";
import VueParticles from "vue-particles";
import App from "./App";

Vue.config.productionTip = false;
Vue.use(VueParticles);

new Vue({
	el: "#app",
	components: { App },
	template: "<App/>"
});
