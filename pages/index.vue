<script setup lang="ts">
</script>
<template>
	<div class="centered-display">
		<div class="grid grid-cols-3">
			<div class="centered-card" @click="navigateTo('/countries')">
				<h2>Countries</h2>
			</div>
			<div class="centered-card">
				<h2>Cities</h2>
			</div>
			<div class="centered-card">
				<h2>Clubs</h2>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.centered-card {
	height: 200px;
	width: 250px;
	cursor: pointer;
}
.grid {
	column-gap: 20px;
	margin-top: 70px;
}
.centered-display {
	justify-content: center;
}
</style>