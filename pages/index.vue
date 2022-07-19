<script setup lang="ts">
import { NButton, NCard, NCarousel } from 'naive-ui';
const message = ref<string>('');
</script>
<template>
	<div class="display">
		<div style="height: 20px">{{ message }}</div>
		<n-button>Naive ui button</n-button>
		<n-card title="Card" size="small">
    	Card Content
  	</n-card>
		<n-carousel show-arrow>
			<img
				class="carousel-img"
				src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
			>
			<img
				class="carousel-img"
				src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
			>
			<img
				class="carousel-img"
				src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
			>
			<img
				class="carousel-img"
				src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
			>
		</n-carousel>
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