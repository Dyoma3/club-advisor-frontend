<script setup lang="ts">
const message = ref<string>('');
</script>
<template>
	<div class="display">
		<div style="height: 20px">{{ message }}</div>
	</div>
</template>
<style scoped>
.display {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
}
.n-card {
	width: 300px;
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.n-carousel {
	width: 300px;
}
</style>