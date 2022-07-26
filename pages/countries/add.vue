<script setup lang="ts">
import { useUser } from '~/stores/user';

const userStore = useUser();

const countryData = reactive({
	name: '',
});

const { data, loading, error, fetch: addCountry } = useAxios({
	url: 'http://localhost:3333/countries',
	method: 'post',
	lazy: true,
	data: countryData,
	headers: { Authorization: `Bearer ${userStore.token}`},
});

watch(data, (v) => {
	if (!v) return;
	navigateTo('/countries');
});
</script>

<template>
	<div class="centered-display">
		<div class="centered-card">
			<h1>Add country</h1>
			<form @submit.prevent="addCountry" class="centered-display">
				<input v-model="countryData.name" placeholder="name" />
				<button >Add country</button>
			</form>
		</div>
	</div>
</template>

<style scoped lang="scss">
.centered-card {
	margin-top: 70px;
}
h1 {
	margin-bottom: 50px;
}
.centered-card {
	padding: 50px 40px 50px 40px;
}
input {
	margin-bottom: 35px;
}
</style>