<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '~/stores/user';

const userStore = useUser();
const { isAdmin, loggedIn } = storeToRefs(userStore);

const { data, loading, error, fetch } = useAxios({ url: 'http://localhost:333/countries' });

watch(data, (v) => {
	if (v) console.log(v);
});
</script>

<template>
	<div class="centered-display">
		<div v-if="isAdmin" style="display:flex;justify-content:end">
			<v-btn>Add Country</v-btn>
		</div>
		<div class="grid grid-cols-3">
		</div>
	</div>
</template>
