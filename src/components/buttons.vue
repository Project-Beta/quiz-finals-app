<template lang="pug">

	.buttons

		div
			span up
		div
			span down

</template>

<script>

	export default {
		name: "buttons"
	}

</script>


<style lang="stylus" scoped>

	.buttons
		padding 0
		margin 0
		font 100 6vw/1
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
