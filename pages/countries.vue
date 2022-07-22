<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '~/stores/user';
import { CountryType, AxiosResponseType } from '~/types';

interface ResponseType extends AxiosResponseType {
	data: CountryType[];
}

const userStore = useUser();
const { isAdmin, loggedIn } = storeToRefs(userStore);

const { data: countries, loading, error, fetch }: ResponseType = useAxios({ url: 'http://localhost:3333/countries' });

</script>

<template>
	<div class="centered-display">
		<div v-if="isAdmin" style="display:flex;justify-content:end">
			<v-btn>Add Country</v-btn>
		</div>
		<div v-if="countries" class="grid grid-cols-3">
			<div v-for="country in countries" class="card centered-display">
				{{ country.name }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.grid {
	column-gap: 20px;
	row-gap: 0px;
}
.card {
	height: 200px;
	background-color: blue;
}
.centered-display {
	justify-content: center;
}
</style>
