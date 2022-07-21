<script setup lang="ts">
import { useUser } from '~~/stores/user';

const userStore = useUser();

let credentials = reactive({
	name: '',
	email: '',
	password: '',
});

const { data, loading, error, fetch: signUp } = useAxios({
	url: 'http://localhost:3333/sign-up',
	lazy: true,
	data: credentials,
	method: 'post',
});

watch(data, async (v) => {
	userStore.$patch({
			id: v.id as number,
			name: v.name as string,
			email: v.email as string,
			token: v.token as string,
			isAdmin: v.role === 'ADMIN',
			loggedIn: true,
		});
		await nextTick();
		navigateTo(`profiles/${userStore.id}`);
});
</script>

<template>
	<div class="centered-display">
		<div class="centered-display card">
			<h1> Sign Up</h1>
			<form @submit.prevent="signUp" class="centered-display">
				<input v-model="credentials.name" placeholder="name" />
				<input v-model="credentials.email" placeholder="email" />
				<input v-model="credentials.password" placeholder="password" type="password" />
				<v-btn type="submit">Sign Up</v-btn>
			</form>
		</div>
	</div>
</template>

<style scoped lang="scss">
h1 {
	margin: 10px 0px 30px 0px;
}
input {
	margin-bottom: 10px;
}
button {
	margin-top: 20px;
}
</style>