<template lang="pug">

	h1.title
		span.codeLight PROJECT
		span.codeBold BETA
		span.codeLight &nbsp;&nbsp;Quiz
		span.codeBold Finals

</template>

<script>

	export default {
		name: "heading"
	}

</script>


<style lang="stylus" scoped>

	h1
		color white
		font-weight 100
		text-align center
		font-size 4vw
		width 100%
		padding 0.3em 0
		border-bottom 1px solid #ccc

		&:hover
			cursor none

	span

		&.codeLight
			font-family "Code Light"

		&.codeBold
			font-family "Code Bold"

</style>
