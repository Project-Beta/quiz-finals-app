import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

let teams = [
	{
		id: 1,
		points: 20,
		background: "linear-gradient(rgba(239, 82, 80, 1) 0%, rgba(251, 138, 0, 1) 100%)"
	}, {
		id: 2,
		points: 30,
		background: "linear-gradient(rgba(13, 72, 161, 1) 0%, rgba(41, 181, 246, 1) 100%)"
	}, {
		id: 3,
		points: 40,
		background: "linear-gradient(rgba(56, 142, 61, 1) 0%, rgba(139, 195, 74, 1) 100%)"
	}, {
		id: 4,
		points: 50,
		background: "linear-gradient(rgba(255, 179, 0, 1) 0%, rgba(255, 238, 88, 1) 100%)"
	}
];

new Vue({
	el: "#app",
	router,
	components: { App },
	template: "<App/>",
	data: {
		teams
	}
});
