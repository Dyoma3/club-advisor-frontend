<script setup lang="ts">
let credentials = reactive({
	email: '',
	password: '',
});

const { data, loading, error, fetch: logIn } = useAxios({
	url: 'http://localhost:3333/log-in',
	lazy: true,
	data: credentials,
	method: 'post'
});

watch(data, (v) => {
	if (v) {
		console.log(v);
	}
});
</script>

<template>
	<div class="centered-display">
		<div class="centered-display card">
			<div class="title">Log In</div>
			<form @submit.prevent="logIn" class="centered-display">
				<input v-model="credentials.email" placeholder="email"/>
				<input v-model="credentials.password" placeholder="password" type="password"/>
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