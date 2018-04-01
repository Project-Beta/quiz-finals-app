<template lang="pug">

	.team.flex.container
		points(:team="team")
		bar(:team="team")
		buttons(:team="team")

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
		},
		props: ["team"]
	}

</script>

<style lang="stylus" scoped>

	.team
		flex-direction column
		justify-content space-between
		width 20%
		padding 5vh 0

</style>
