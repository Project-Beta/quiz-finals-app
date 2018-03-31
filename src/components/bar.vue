<template lang="pug">

	.barContainer
		.bar(v-bind:style="{ height: barHeight + '%' }")

</template>

<script>

	export default {
		name: "bar",
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

</style>
