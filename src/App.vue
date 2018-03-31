<template lang="pug">

	#app.flex.container

		heading

		section.team.flex.container

			team
			team
			team
			team

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
		}
	}

</script>

<style src="./assets/styl/App.styl" lang="stylus"></style>
