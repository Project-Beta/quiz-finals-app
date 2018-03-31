<template lang="pug">

	.points
		p(contenteditable) 0

</template>

<script>

	export default {
		name: "points"
	}

</script>


<style lang="stylus" scoped>

	.points
		width 80%
		padding 2vh 0
		border 0
		border-top 2px solid #aaa
		color #eee
		text-align center
		box-sizing border-box
		background transparent
		transition all 0.3s ease-out
		cursor default
		font-size 2.5em
		font-family "IBM Plex Sans"
		cursor text

</style>
