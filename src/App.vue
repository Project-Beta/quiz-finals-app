<template lang="pug">

	#app.flex.container

		heading

		section.main.flex.container

			team(v-for="team in teams" :team="team" :id="team.id")

		//- router-view

</template>

<script>

	import heading from "./components/heading"
	import team from "./components/team"

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
						id: 1,
						points: 0,
						background: "linear-gradient(rgb(255, 12, 9) 0%, rgb(251, 104, 0) 100%)"
					}, {
						id: 2,
						points: 0,
						background: "linear-gradient(rgba(13, 72, 161, 1) 0%, rgba(41, 181, 246, 1) 100%)"
					}, {
						id: 3,
						points: 0,
						background: "linear-gradient(rgba(56, 142, 61, 1) 0%, rgba(139, 195, 74, 1) 100%)"
					}, {
						id: 4,
						points: 0,
						background: "linear-gradient(rgba(255, 179, 0, 1) 0%, rgba(255, 238, 88, 1) 100%)"
					}
				]
			}
		}
	}

</script>

<style src="./assets/styl/App.styl" lang="stylus"></style>
