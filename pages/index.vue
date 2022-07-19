<script setup lang="ts">
import InputText from 'primevue/inputtext';
const message = ref<string>('');
</script>
<template>
	<div class="display">
		<div style="height: 20px">{{ message }}</div>
		<input-text v-model="message" />
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