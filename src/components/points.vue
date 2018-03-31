<template lang="pug">

	.points
		p {{points}}

</template>

<script>

	export default {
		name: "points"
	}

</script>


<style lang="stylus" scoped>

	.points
		width 50%
		padding 2vh 0
		border 0
		border-top 2px solid #aaa
		color #eee
		text-align center
		box-sizing border-box
		background transparent
		transition all 0.3s ease-out
		cursor default

</style>
