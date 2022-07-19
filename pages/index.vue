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
</style>