<script setup lang="ts">
import { CountryType, CityType, ClubType } from '~/types';

const route = useRoute();
const { id } = route.params;
const { data: country } = await useFetch<CountryType>(
	`http://localhost:3333/countries/${id}`,
	{ initialCache: false },
);

const { data: cities } = useAxios<CityType[]>({ url: `http://localhost:3333/countries/${id}/cities` });

const { data: clubs } = useAxios<ClubType[]>({ url: `http://localhost:3333/countries/${id}/clubs` });
</script>

<template>
	<div class="centered-display">
		<h1>{{ country.name }}</h1>
		<div class="grid grid-cols-4">
			<h2 class="col-span-4">Cities</h2>
				<div
					v-if="cities"
					v-for="(city, i) in cities"
					:key="i"
					class="centered-card expand"
					@click="navigateTo(`/cities/${city.id}`)"
				>
					<h3>{{ city.name }}</h3>
				</div>
		</div>
		<div class="grid grid-cols-4">
			<h2 class="col-span-4">Clubs</h2>
			<div
				v-if="clubs"
				v-for="(club, i) in clubs"
				:key="i"
				class="centered-card expand"
				@click="navigateTo(`/clubs/${club.id}`)"
			>
				<h3>{{ club.name }}</h3>
			</div>
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
	column-gap: 15px;
	row-gap: 20px;
}
.centered-card {
	@extend .expand !optional;
	height: 100px;
	width: 200px;
	cursor: pointer;
}
</style>

