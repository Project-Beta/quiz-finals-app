<template lang="pug">

	.team.flex.container

		points
		bar
		buttons

</template>

<script>

	import points from "./points"
	import bar from "./bar"
	import buttons from "./buttons"

	export default {
		name: "team",
		components: {
			points,
			bar,
			buttons
		}
	}

</script>

<style lang="stylus" scoped>

	.team
		flex-direction column
		justify-content space-between
		width 20%
		padding 5vh 0

</style>
