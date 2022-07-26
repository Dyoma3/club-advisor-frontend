<script setup lang="ts">
import { CountryType } from '~~/types';
import { useUser } from '~/stores/user';

const userStore = useUser();

const { data: cities, loading, error, fetch } = useAxios<CountryType[]>({
	url: 'http://localhost:3333/cities',
});
</script>

<template>
	<div class="centered-display">
		<h1>Cities</h1>
		<div v-if="cities" class="grid grid-cols-3">
			<div
				v-for="city in cities"
				class="centered-card expand"
				@click="navigateTo(`/cities/${city.id}`)"
			>
				<h2>{{ city.name }}</h2>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.grid {
	column-gap: 20px;
	row-gap: 10px;
	margin-top: 50px;
}
.centered-card {
	height: 200px;
	width: 250px;
	cursor: pointer;
}
.centered-display {
	justify-content: center;
}
</style>
