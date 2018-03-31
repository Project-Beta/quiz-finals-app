<template lang="pug">

	h1.title.flex
		span.codeLight PROJECT
		span.codeBold BETA
		|&nbsp;&nbsp;Quiz Finals

</template>

<script>

	export default {
		name: "heading"
	}

</script>


<style lang="stylus" scoped>

	h1
		color #eee
		font-weight 100
		text-align center
		width 100%
		padding 0.3em 0
		font-family "IBM Plex Sans", sans-serif
		height 15vh
		vertical-align bottom
		font-size 3vw

		&:hover
			cursor none

	span
		font-size 4vw

		&.codeLight
			font-family "Code Light"

		&.codeBold
			font-family "Code Bold"

</style>
