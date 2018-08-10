<template lang="pug">

	#app.flex.container

		vue-particles(
			color="#555"
			:particleOpacity="0.2"
			:particlesNumber="100"
			shapeType="circle"
			:particleSize="3"
			linesColor="#333"
			:linesWidth="1"
			:lineLinked="false"
			:lineOpacity="0.1"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push"
		)

		heading

		section.main.flex.container

			team(
				v-for="team in teams"
				:team="team"
				:highestPoints="highestPoints"
			)

</template>

<script>

import heading from "./components/heading";
import team from "./components/team";

export default {
	name: "App",
	components: {
		heading,
		team
	},
	data () {

		return {
			teams: [
				{
					points: 0,
					background: "linear-gradient(rgb(255, 12, 9) 0%, rgb(251, 104, 0) 100%)",
					name: ""
				}, {
					points: 0,
					background: "linear-gradient(rgba(13, 72, 161, 1) 0%, rgba(41, 181, 246, 1) 100%)",
					name: ""
				}, {
					points: 0,
					background: "linear-gradient(rgba(56, 142, 61, 1) 0%, rgba(139, 195, 74, 1) 100%)",
					name: ""
				}, {
					points: 0,
					background: "linear-gradient(rgba(255, 179, 0, 1) 0%, rgba(255, 238, 88, 1) 100%)",
					name: ""
				}, {
					points: 0,
					background: "linear-gradient(rgba(103, 58, 183, 1) 0%, rgba(102, 87, 128, 1) 100%)",
					name: ""
				}, {
					points: 0,
					background: "linear-gradient(rgba(0, 77, 64, 1) 0%, rgba(36, 138, 121, 1) 100%)",
					name: ""
				}
			]
		};

	},
	computed: {
		highestPoints: function () {

			let max = [
				this.teams[0].points,
				this.teams[1].points,
				this.teams[2].points,
				this.teams[3].points,
				this.teams[4].points,
				this.teams[5].points
			].reduce(function(a, b) {

				return Math.max(a, b);

			});
			return max === 0 ? 1 : max;

		}
	}
};

</script>

<style src="./assets/styl/App.styl" lang="stylus"></style>
