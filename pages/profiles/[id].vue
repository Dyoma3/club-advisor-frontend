<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '~~/stores/user';

const userStore = useUser();
const { name, email } = storeToRefs(userStore);

</script>
<template>
	<div class="centered-display">
		<h1>{{ name }}</h1>
		<h3>{{ email }}</h3>
	</div>
</template>

<style scoped lang="scss">
h1 {
	margin-top: 60px;
}
h3 {
	font-size: 18px;
	font-weight: 300;
}
</style>