<template lang="pug">

	.barContainer
		.bar(:style="{ height: team.points + '%', background: team.background }")

</template>

<script>

	export default {
		name: "bar",
		props: ["team"]
	}

</script>


<style lang="stylus" scoped>

	.barContainer
		width 5vw
		height 480px
		padding 0
		margin 0

		.bar
			width 100%
			height 10%
			background #008080
			bottom 0
			position absolute
			transition 0.2s all linear
			max-height 100%
			min-height 5%

</style>
