<template lang="pug">

	.buttons

		div.flex(v-on:click="barHeight++")
			span ⬆
		div.flex
			span ⬇

</template>

<script>

	export default {
		name: "buttons",
		data () {
			return {
				barHeight: 10
			}
		}
	}

</script>


<style lang="stylus" scoped>

	.buttons
		padding 0
		margin 0
		font-size 1.5em
		color #eee
		display flex
		flex-direction column
		align-items center
		width 25%

		div
			padding 1vh 2vw
			margin 0
			border 1px solid #eee
			box-sizing border-box
			transition all 0.3s ease-out
			width 100%
			text-align center

			&:hover
				cursor pointer
				background #eee
				color #222

</style>
