<template lang="pug">

	#app.flex.container

		heading

		//- router-view

</template>

<script>

	import heading from "./components/heading"

	export default {
		name: "App",
		components: {
			heading
		}
	}

</script>

<style src="./assets/styl/App.styl" lang="stylus"></style>
