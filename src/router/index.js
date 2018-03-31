import Vue from "vue";
import Router from "vue-router";
import heading from "@/components/heading";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "heading",
			component: heading
		}
	]
});
