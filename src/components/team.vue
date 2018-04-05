<template lang="pug">

	.team.flex.container

		.barContainer.flex

			.points.flex

				input(
					v-model="team.points"
					type="number"
				)

			.bar(:style="{ height: (team.points/highestPoints)*100 + '%', background: team.background }")

		.buttons

			div.flex(v-on:click="team.points = parseInt(team.points)+5").noselect
				span +

			div.flex(v-on:click="team.points = parseInt(team.points)-5").noselect
				span –

</template>

<script>

	export default {
		name: "team",
		props: ["team", "highestPoints"]
	}

</script>

<style src="../assets/styl/team.styl" lang="stylus" scoped></style>
