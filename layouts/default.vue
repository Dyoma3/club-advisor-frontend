<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUser } from '~/stores/user';

const userStore = useUser();
const { name, loggedIn } = storeToRefs(userStore);
watch(name, (v) => {
	console.log(v);
})

function logOut() {
	return;
}

</script>
<template>
	<div>
		<div class="layout">
			<h1>Club Advisor</h1>
			<div v-if="loggedIn" style="display:flex;">
				<p>{{ name }}</p>
				<p @click="logOut" style="cursor:pointer;margin-left: 20px;">Log out</p>
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
h1 {
	font-size: 25px;
	font-weight: 500;
}
p {
	font-size: 18px;
}
p, h1 {
	color: white;
}
</style>