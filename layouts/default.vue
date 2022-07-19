<template>
	<div style="">
		<div class="layout">
			<p>Club Advisor</p>
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
	padding: 0px 20px 0px 20px;
	position: relative;
	display: flex;
	align-items: center;
}
p {
	color: white;
	font-size: 25px;
	font-weight: 500;
}
</style>