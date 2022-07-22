<script setup lang="ts">
</script>
<template>
	<div class="centered-display">
		<div class="grid grid-cols-3">
			<div class="card centered-display" @click="navigateTo('/countries')">
				<h2>Countries</h2>
			</div>
			<div class="card centered-display">
				<h2>Cities</h2>
			</div>
			<div class="card centered-display">
				<h2>Clubs</h2>
			</div>
		</div>
	</div>
</template>
<style scoped>
.card {
	border-style: solid;
	border-width: 1px;
	border-radius: 5px;
	border-color: #dadada;
	transition: all 0.4s;
	height: 200px;
	width: 250px;
	cursor: pointer;
}
.card:hover {
	transform: scale(1.05);
}
.grid {
	column-gap: 20px;
	margin-top: 70px;
}
.centered-display {
	justify-content: center;
}
</style>