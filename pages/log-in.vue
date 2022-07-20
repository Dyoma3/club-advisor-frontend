<script setup lang="ts">
const email = ref<string>('');
const password = ref<string>('');

function logIn() {
	const { pending, data } = useLazyFetch('http://localhost:3333/log-in', {
		method: 'post',
		body: { email, password },
	});
}
</script>

<template>
	<div class="centered-display">
		<div class="centered-display card">
			<div class="title">Log In</div>
			<form @submit.prevent="logIn" class="centered-display">
				<input v-model="email" placeholder="email"/>
				<input v-model="password" placeholder="password" type="password"/>
				<v-btn type="submit">Log In</v-btn>
			</form>
		</div>
	</div>
</template>

<style scoped lang="scss">
.title {
	font-size: 25px;
	font-weight: 500;
	color: black;
	margin: 10px 0px 30px 0px;
}
.card {
	border-width: 1px;
	border-color: #dadada;
	border-style: solid;
	border-radius: 5px;
	margin-top: 50px;
	padding: 50px 0px 50px 0px;
	width: 320px;
}
input {
	margin-bottom: 10px;
}
button {
	margin-top: 20px;
}
</style>