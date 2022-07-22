<script setup lang="ts">
import { useUser } from '~/stores/user';
import { UserType } from '~~/types';

const userStore = useUser();

let credentials = reactive({
	email: '',
	password: '',
});

const { data, loading, error, fetch: logIn } = useAxios<UserType>({
	url: 'http://localhost:3333/log-in',
	lazy: true,
	data: credentials,
	method: 'post'
});

watch(data, async (v) => {
	if (v) {
		userStore.$patch({
			id: v.id,
			name: v.name,
			email: v.email,
			token: v.token,
			isAdmin: v.role === 'ADMIN',
			loggedIn: true,
		});
		await nextTick();
		navigateTo(`profiles/${userStore.id}`);
	}
});
</script>

<template>
	<div class="centered-display">
		<div class="centered-display card">
			<h1>Log In</h1>
			<form @submit.prevent="logIn" class="centered-display">
				<input v-model="credentials.email" placeholder="email"/>
				<input v-model="credentials.password" placeholder="password" type="password"/>
				<v-btn type="submit">Log In</v-btn>
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