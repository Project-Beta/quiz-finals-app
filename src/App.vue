<template lang="pug">

	#app.flex.container

		heading

		section.main.flex.container

			team(number=1)
			team(number=2)
			team(number=3)
			team(number=4)

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
