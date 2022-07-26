<script setup lang="ts">
import { CountryType, CityType, ClubType } from '~/types';
import { useUser } from '~/stores/user';

const userStore = useUser();

const route = useRoute();
const { id } = route.params;
const { data: country } = await useFetch<CountryType>(
	`http://localhost:3333/countries/${id}`,
	{ initialCache: false },
);

const { data: cities } = useAxios<CityType[]>({ url: `http://localhost:3333/countries/${id}/cities` });

const { data: clubs } = useAxios<ClubType[]>({ url: `http://localhost:3333/countries/${id}/clubs` });

const { fetch: removeCountry } = useAxios({
	url: `http://localhost:3333/countries/${id}`,
	method: 'delete',
	lazy: true,
	headers: { Authorization: `Bearer ${userStore.token}`},
});

function onRemoveCountry() {
	removeCountry()
		.then(() => {
			navigateTo('/countries');
		})
}
</script>

<template>
	<div class="centered-display">
		<div style="position:relative">
			<h1>{{ country.name }}</h1>
			<button
				v-if="userStore.isAdmin"
				style="position:absolute;top:50px;left:400px"
				@click="onRemoveCountry"
			>
				Remove
			</button>
		</div>
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
button {
	border-color: red;
}
</style>

