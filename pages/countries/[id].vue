<script setup lang="ts">
interface CountryType {
	id: number;
	name: string;
	created_at: string;
	updated_at: string;
}

const route = useRoute();
const { data: country } = await useFetch<CountryType>(`http://localhost:3333/countries/${route.params.id}`);


</script>

<template>
	<div class="centered-display">
		<h1>{{ country.name }}</h1>
		<div class="grid grid-cols-4">
			<p>Cities</p>
		</div>
		<div class="grid grid-cols-4">
			<p>Clubs</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
h1 {
	margin-top: 50px;
	margin-bottom: 40px;
}
.grid {
	margin-bottom: 40px;
}
</style>

