<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '~/stores/user';

const userStore = useUser();
const { name, loggedIn } = storeToRefs(userStore);

function logOut() {
	userStore.$patch({
		id: -1,
		name: '',
		email: '',
		token: '',
		isAdmin: false,
		loggedIn: false,
	})
}

</script>
<template>
	<div>
		<div class="layout">
			<h2>Club Advisor</h2>
			<div v-if="loggedIn" style="display:flex;">
				<p>{{ name }}</p>
				<p @click="logOut" style="cursor:pointer;">Log out</p>
			</div>
			<div v-else style="display:flex">
				<p @click="navigateTo('/log-in')" style="cursor:pointer;">Log in</p>
				<p @click="navigateTo('/sign-up')" style="cursor:pointer;">Sign up</p>
			</div>
		</div>
		<slot/>
	</div>
</template>
<style scoped>
.layout {
	height: 70px;
	background-color: #002129;
	width: 100vw;
	top: 0px;
	left: 0px;
	padding: 0px 50px 0px 50px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
h2 {
	font-size: 25px;
	font-weight: 500;
}
p {
	font-size: 18px;
	margin-left: 20px;
}
p, h2 {
	color: white;
}
</style>