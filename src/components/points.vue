<template lang="pug">

	.points
		input(v-model="team.points" type="number")

</template>

<script>

	export default {
		name: "points",
		props: ["team"]
	}

</script>


<style lang="stylus" scoped>

	.points
		width 80%
		padding 2vh 0
		border 0
		border-top 2px solid #aaa
		text-align center
		box-sizing border-box
		background transparent
		transition all 0.3s ease-out
		cursor text

		input
			color #eee
			font-size 30px
			font-family "IBM Plex Sans"
			background transparent
			border none
			width 100%
			text-align center
			outline none


</style>
