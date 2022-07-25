<script setup lang="ts">
import { useUser } from '~/stores/user';
import { CountryType } from '~/types';


const userStore = useUser();

const { data: countries, loading, error, fetch } = useAxios<CountryType[]>({ url: 'http://localhost:3333/countries' });

</script>

<template>
	<div class="centered-display">
		<div v-if="countries" class="grid grid-cols-3">
			<div v-if="userStore.isAdmin" class="buttons-container">
				<button>Add Country</button>
			</div>
			<div
				v-for="country in countries"
				class="centered-card expand"
				@click="navigateTo(`/countries/${country.id}`)"
			>
				<h2>{{ country.name }}</h2>
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
.buttons-container {
	grid-column: span 3 / span 3;
	justify-content: flex-end;
}
</style>
